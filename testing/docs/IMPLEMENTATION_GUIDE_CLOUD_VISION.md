# Implementation Guide: Cloud Image Description in RAGy

**Goal**: Enable AI image descriptions in docling processing without overwhelming M3 MacBook hardware

---

## Quick Start

### Option 1: Try MLX-Optimized SmolDocling First (Recommended)

This should work on your M3 since it's specifically optimized for Apple Silicon.

**Update `server/python/docling_chunker.py`:**

```python
# Add at the top with other imports
from docling.datamodel.pipeline_options import PdfPipelineOptions

# In your conversion code (around line 150-200), modify pipeline options:
def convert_with_mlx_vision(file_path):
    """Convert document using MLX-optimized vision model"""
    
    pipeline_options = PdfPipelineOptions(
        do_picture_description=True,  # Enable image descriptions
        # MLX will automatically use optimized model for M3
    )
    
    converter = DocumentConverter(
        format_options={
            InputFormat.PDF: PdfFormatOption(
                pipeline_options=pipeline_options
            )
        }
    )
    
    result = converter.convert(file_path)
    return result.document
```

**Test it:**
```bash
cd /Users/tomeryud/projects/RAGy
python3 -c "
from server.python.docling_chunker import convert_with_mlx_vision
doc = convert_with_mlx_vision('test-document.pdf')
print('Success! Image descriptions enabled.')
"
```

**If this works**: Stop here! You don't need cloud services.

**If memory issues persist**: Continue to Option 2.

---

## Option 2: Cloud-Based Image Description (If MLX Doesn't Work)

### Step 1: Choose Your Provider

I recommend **Google Gemini 1.5 Flash** for the best price/performance:

- ✅ Free tier: 1,500 requests/day
- ✅ Very affordable: $0.075 input / $0.30 output per 1M tokens
- ✅ Fast and high quality
- ✅ OpenAI-compatible API

**Alternative**: GPT-4o-mini (slightly more expensive but excellent quality)

### Step 2: Get API Key

#### For Gemini:
1. Go to https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key

#### For OpenAI (GPT-4o-mini):
1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy the key

### Step 3: Update Environment Variables

Create or update `.env` file in project root:

```bash
# /Users/tomeryud/projects/RAGy/.env

# Enable cloud vision
USE_CLOUD_VISION=true

# Choose provider: "gemini" or "openai"
CLOUD_VISION_PROVIDER=gemini

# API Keys (add the one you're using)
GOOGLE_API_KEY=your_google_api_key_here
# OPENAI_API_KEY=your_openai_api_key_here

# Optional: Adjust settings
VISION_CONCURRENCY=4  # Parallel requests (default: 4)
VISION_TIMEOUT=30     # Timeout in seconds (default: 30)
VISION_MAX_TOKENS=500 # Max tokens for description (default: 500)
```

### Step 4: Update `docling_chunker.py`

Add this configuration class at the top:

```python
# server/python/docling_chunker.py

import os
from docling.document_converter import DocumentConverter
from docling.datamodel.pipeline_options import (
    PdfPipelineOptions,
    PictureDescriptionApiOptions
)
from docling.datamodel.base_models import InputFormat
from docling.document_converter import PdfFormatOption

class VisionConfig:
    """Configuration for cloud-based image description"""
    
    @staticmethod
    def get_provider_config():
        """Get cloud vision provider configuration"""
        provider = os.getenv('CLOUD_VISION_PROVIDER', 'gemini').lower()
        
        if provider == 'gemini':
            return {
                'url': 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
                'api_key_env': 'GOOGLE_API_KEY',
                'model': 'gemini-1.5-flash',
                'headers': {
                    'Authorization': f'Bearer {os.getenv("GOOGLE_API_KEY")}',
                    'Content-Type': 'application/json'
                }
            }
        elif provider == 'openai':
            return {
                'url': 'https://api.openai.com/v1/chat/completions',
                'api_key_env': 'OPENAI_API_KEY',
                'model': 'gpt-4o-mini',
                'headers': {
                    'Authorization': f'Bearer {os.getenv("OPENAI_API_KEY")}',
                    'Content-Type': 'application/json'
                }
            }
        else:
            raise ValueError(f"Unknown provider: {provider}. Use 'gemini' or 'openai'")
    
    @staticmethod
    def create_pipeline_options():
        """Create pipeline options with cloud vision if enabled"""
        use_cloud = os.getenv('USE_CLOUD_VISION', 'false').lower() == 'true'
        
        if not use_cloud:
            # Local processing (MLX-optimized)
            return PdfPipelineOptions(
                do_picture_description=True,
            )
        
        # Cloud processing
        provider_config = VisionConfig.get_provider_config()
        api_key = os.getenv(provider_config['api_key_env'])
        
        if not api_key:
            raise ValueError(
                f"Cloud vision enabled but {provider_config['api_key_env']} not set. "
                f"Please set it in .env file or disable cloud vision."
            )
        
        picture_options = PictureDescriptionApiOptions(
            url=provider_config['url'],
            params={
                'model': provider_config['model'],
                'max_tokens': int(os.getenv('VISION_MAX_TOKENS', '500')),
                'temperature': 0.3,  # Lower temperature for consistent descriptions
            },
            headers=provider_config['headers'],
            concurrency=int(os.getenv('VISION_CONCURRENCY', '4')),
            prompt=(
                "Describe this image clearly and concisely for document understanding. "
                "Include key visual elements, text content if visible, and the purpose "
                "or context of the image within the document."
            ),
            timeout=int(os.getenv('VISION_TIMEOUT', '30')),
        )
        
        return PdfPipelineOptions(
            enable_remote_services=True,  # REQUIRED for cloud
            do_picture_description=True,
            picture_options=picture_options,
        )
```

### Step 5: Integrate into Existing Conversion Code

Find your main conversion function (likely around line 150-250) and update it:

```python
def process_document(file_path):
    """Process document with configurable image description"""
    
    try:
        # Create pipeline options (cloud or local based on env)
        pipeline_options = VisionConfig.create_pipeline_options()
        
        # Create converter with vision options
        converter = DocumentConverter(
            format_options={
                InputFormat.PDF: PdfFormatOption(
                    pipeline_options=pipeline_options
                )
            }
        )
        
        # Log which mode we're using
        use_cloud = os.getenv('USE_CLOUD_VISION', 'false').lower() == 'true'
        if use_cloud:
            provider = os.getenv('CLOUD_VISION_PROVIDER', 'gemini')
            print(json.dumps({
                "info": f"Using cloud vision: {provider}",
                "status": "initializing"
            }), file=sys.stderr, flush=True)
        else:
            print(json.dumps({
                "info": "Using local MLX-optimized vision",
                "status": "initializing"
            }), file=sys.stderr, flush=True)
        
        # Convert document
        result = converter.convert(file_path)
        
        # Extract image descriptions
        image_count = 0
        for item in result.document.iterate_items():
            if hasattr(item, 'label') and item.label == 'picture':
                image_count += 1
                if hasattr(item, 'caption') and item.caption:
                    print(json.dumps({
                        "info": f"Image {image_count} described",
                        "description": item.caption[:100] + "..." if len(item.caption) > 100 else item.caption
                    }), file=sys.stderr, flush=True)
        
        print(json.dumps({
            "info": f"Processed {image_count} images with descriptions",
            "status": "complete"
        }), file=sys.stderr, flush=True)
        
        return result.document
        
    except Exception as e:
        print(json.dumps({
            "error": f"Vision processing failed: {str(e)}",
            "hint": "Check API key or try disabling cloud vision"
        }), file=sys.stderr, flush=True)
        raise
```

### Step 6: Test the Integration

Create a test script:

```python
# test_cloud_vision.py
#!/usr/bin/env python3

import os
import sys
from pathlib import Path

# Add server path
sys.path.insert(0, str(Path(__file__).parent / 'server' / 'python'))

def test_vision():
    """Test cloud vision integration"""
    
    # Test 1: Check environment
    print("=== Testing Environment ===")
    use_cloud = os.getenv('USE_CLOUD_VISION', 'false')
    provider = os.getenv('CLOUD_VISION_PROVIDER', 'gemini')
    
    print(f"Cloud Vision: {use_cloud}")
    print(f"Provider: {provider}")
    
    if use_cloud.lower() == 'true':
        api_key_env = 'GOOGLE_API_KEY' if provider == 'gemini' else 'OPENAI_API_KEY'
        api_key = os.getenv(api_key_env)
        if api_key:
            print(f"✅ {api_key_env}: Set ({len(api_key)} chars)")
        else:
            print(f"❌ {api_key_env}: NOT SET - Cloud vision will fail!")
            return False
    
    # Test 2: Import docling
    print("\n=== Testing Docling Import ===")
    try:
        from docling.document_converter import DocumentConverter
        from docling.datamodel.pipeline_options import PictureDescriptionApiOptions
        print("✅ Docling imports successful")
    except ImportError as e:
        print(f"❌ Docling import failed: {e}")
        return False
    
    # Test 3: Create configuration
    print("\n=== Testing Configuration ===")
    try:
        from docling_chunker import VisionConfig
        config = VisionConfig.create_pipeline_options()
        print(f"✅ Configuration created: {type(config).__name__}")
        print(f"   - Picture description: {config.do_picture_description}")
        print(f"   - Remote services: {config.enable_remote_services}")
    except Exception as e:
        print(f"❌ Configuration failed: {e}")
        return False
    
    print("\n=== All Tests Passed ===")
    return True

if __name__ == '__main__':
    success = test_vision()
    sys.exit(0 if success else 1)
```

Run the test:

```bash
cd /Users/tomeryud/projects/RAGy
python3 test_cloud_vision.py
```

### Step 7: Test with Real Document

```bash
# Test with a PDF that has images
cd /Users/tomeryud/projects/RAGy

# Make sure environment is set
export USE_CLOUD_VISION=true
export CLOUD_VISION_PROVIDER=gemini
export GOOGLE_API_KEY=your_actual_key_here

# Run docling chunker on a test file
python3 server/python/docling_chunker.py path/to/test.pdf
```

---

## Monitoring & Cost Tracking

### Track API Usage

For Gemini (Google AI Studio):
- Dashboard: https://aistudio.google.com/app/apikey
- View usage and remaining quota

For OpenAI:
- Dashboard: https://platform.openai.com/usage
- View costs and usage

### Estimate Costs

**Average cost per image:**
- Gemini Flash: ~$0.0003 per image
- GPT-4o-mini: ~$0.0005 per image

**Monthly estimates:**
- 1,000 images: ~$0.30 (Gemini) or ~$0.50 (GPT-4o-mini)
- 10,000 images: ~$3.00 (Gemini) or ~$5.00 (GPT-4o-mini)
- 100,000 images: ~$30 (Gemini) or ~$50 (GPT-4o-mini)

### Add Cost Tracking to Your Code

```python
# Add to docling_chunker.py

class CostTracker:
    """Track API costs for cloud vision"""
    
    def __init__(self):
        self.image_count = 0
        self.total_input_tokens = 0
        self.total_output_tokens = 0
    
    def add_request(self, input_tokens=0, output_tokens=0):
        """Track a single API request"""
        self.image_count += 1
        self.total_input_tokens += input_tokens
        self.total_output_tokens += output_tokens
    
    def estimate_cost(self, provider='gemini'):
        """Estimate total cost based on provider"""
        if provider == 'gemini':
            # Gemini Flash pricing
            input_cost = (self.total_input_tokens / 1_000_000) * 0.075
            output_cost = (self.total_output_tokens / 1_000_000) * 0.30
        elif provider == 'openai':
            # GPT-4o-mini pricing
            input_cost = (self.total_input_tokens / 1_000_000) * 0.15
            output_cost = (self.total_output_tokens / 1_000_000) * 0.60
        else:
            return None
        
        return {
            'images': self.image_count,
            'input_tokens': self.total_input_tokens,
            'output_tokens': self.total_output_tokens,
            'input_cost': round(input_cost, 4),
            'output_cost': round(output_cost, 4),
            'total_cost': round(input_cost + output_cost, 4),
            'cost_per_image': round((input_cost + output_cost) / max(self.image_count, 1), 6)
        }
    
    def print_summary(self, provider='gemini'):
        """Print cost summary"""
        cost_info = self.estimate_cost(provider)
        if cost_info:
            print(json.dumps({
                'cost_summary': cost_info,
                'provider': provider
            }), file=sys.stderr, flush=True)

# Usage in your conversion code:
cost_tracker = CostTracker()
# After each image description, if you can get token counts from response:
# cost_tracker.add_request(input_tokens=500, output_tokens=200)
# At the end:
# cost_tracker.print_summary(provider)
```

---

## Troubleshooting

### Issue: "API key not found"

**Solution:**
```bash
# Make sure .env file is loaded
# Or export directly:
export GOOGLE_API_KEY=your_key_here
# or
export OPENAI_API_KEY=your_key_here
```

### Issue: "Rate limit exceeded"

**Solution 1**: Reduce concurrency
```bash
export VISION_CONCURRENCY=1  # Process one image at a time
```

**Solution 2**: Add delays in code
```python
import time
# After each batch
time.sleep(1)  # Wait 1 second between batches
```

### Issue: "Timeout errors"

**Solution**: Increase timeout
```bash
export VISION_TIMEOUT=60  # 60 seconds instead of 30
```

### Issue: Still getting memory errors with MLX

**Solutions:**
1. **Reduce image resolution** before processing
2. **Process fewer pages at once**
3. **Disable other enrichments** (code, formula) to save memory
4. **Switch to cloud** (recommended)

### Issue: Descriptions are too long/short

**Solution**: Adjust prompt and max_tokens in `VisionConfig`:

```python
# For shorter descriptions:
prompt="Describe this image in one concise sentence."
max_tokens=100

# For detailed descriptions:
prompt="Provide a detailed description of this image including all text, diagrams, and visual elements."
max_tokens=1000
```

---

## Performance Optimization

### 1. Batch Processing

If processing many documents, process in batches:

```python
def process_batch(file_paths, batch_size=10):
    """Process documents in batches to manage resources"""
    results = []
    
    for i in range(0, len(file_paths), batch_size):
        batch = file_paths[i:i+batch_size]
        print(f"Processing batch {i//batch_size + 1}/{(len(file_paths)-1)//batch_size + 1}")
        
        for file_path in batch:
            result = process_document(file_path)
            results.append(result)
        
        # Short break between batches
        time.sleep(1)
    
    return results
```

### 2. Caching

Cache image descriptions to avoid re-processing:

```python
import hashlib
import json
from pathlib import Path

CACHE_DIR = Path(__file__).parent / '.vision_cache'
CACHE_DIR.mkdir(exist_ok=True)

def cache_key(image_data):
    """Generate cache key from image data"""
    return hashlib.md5(image_data).hexdigest()

def get_cached_description(image_data):
    """Get cached description if exists"""
    key = cache_key(image_data)
    cache_file = CACHE_DIR / f"{key}.json"
    
    if cache_file.exists():
        return json.loads(cache_file.read_text())
    return None

def save_description_cache(image_data, description):
    """Save description to cache"""
    key = cache_key(image_data)
    cache_file = CACHE_DIR / f"{key}.json"
    cache_file.write_text(json.dumps({
        'description': description,
        'timestamp': time.time()
    }))
```

### 3. Parallel Processing

For multiple documents, use multiprocessing:

```python
from multiprocessing import Pool

def process_documents_parallel(file_paths, num_workers=4):
    """Process multiple documents in parallel"""
    with Pool(num_workers) as pool:
        results = pool.map(process_document, file_paths)
    return results

# Usage:
results = process_documents_parallel(['doc1.pdf', 'doc2.pdf', 'doc3.pdf'])
```

---

## Integration with RAGy Frontend

### Update Upload Handler

In `server/routes/upload.routes.js`, add vision status to metadata:

```javascript
// After docling processing
const visionEnabled = process.env.USE_CLOUD_VISION === 'true';
const visionProvider = process.env.CLOUD_VISION_PROVIDER || 'none';

metadata.processing = {
  ...metadata.processing,
  visionEnabled,
  visionProvider,
  imageDescriptions: extractedImages.length > 0
};
```

### Display in UI

Add indicator in document viewer showing image description is active:

```jsx
// In your React component
{document.metadata?.processing?.imageDescriptions && (
  <Badge color="success">
    <Icon name="image" /> AI Image Descriptions
  </Badge>
)}
```

---

## Next Steps

1. ✅ **Start with MLX** - Try local processing first
2. ✅ **Test cloud integration** - Set up Gemini Flash if MLX doesn't work
3. ✅ **Monitor costs** - Track usage in provider dashboard
4. ✅ **Optimize prompts** - Adjust for your specific use case
5. ✅ **Scale gradually** - Start small, increase as needed

---

## FAQ

**Q: Which provider should I choose?**
A: Start with Gemini 1.5 Flash - it's the best value and has a generous free tier.

**Q: Will this work offline?**
A: MLX option works offline. Cloud options require internet connection.

**Q: How much will this cost me?**
A: For most users: $1-5/month. Free tier covers ~1,500 images/day with Gemini.

**Q: Can I switch providers later?**
A: Yes! Just change `CLOUD_VISION_PROVIDER` env var and the corresponding API key.

**Q: What about privacy?**
A: For sensitive documents, use MLX (local) or self-hosted options. For public documents, cloud is fine.

**Q: Does this slow down processing?**
A: Cloud: ~1-2 seconds per image (with concurrency).  
MLX: ~6 seconds per image on M3 Max.  
But it happens in parallel with other processing.

---

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review docling documentation: `/Users/tomeryud/projects/RAGy/rag-system-export/docs/docling-rag/`
3. Test with the included `test_cloud_vision.py` script
4. Check provider status pages:
   - Gemini: https://status.cloud.google.com/
   - OpenAI: https://status.openai.com/

---

## Summary

✅ **YES** - You can offload image description to cloud  
✅ **Recommended**: Try MLX first, then Gemini Flash if needed  
✅ **Cost**: ~$0.0003 per image with Gemini  
✅ **Setup time**: ~10-15 minutes  
✅ **Fully automated**: Once configured, requires no manual intervention  

Good luck! Let me know if you need help with implementation.

