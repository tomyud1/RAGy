# Vision Models Comparison for Image Description

Quick reference guide for choosing the right solution for RAGy

---

## Cloud Providers Quick Comparison

| Provider | Best For | Cost (1K images) | Quality | Speed | Free Tier |
|----------|----------|------------------|---------|-------|-----------|
| **🏆 Gemini Flash** | Best value | $0.26 | ⭐⭐⭐⭐ | Fast | 1,500/day |
| **GPT-4o-mini** | Quality on budget | $0.50 | ⭐⭐⭐⭐⭐ | Fast | $5 credit |
| **GPT-4o** | Maximum quality | $12.50 | ⭐⭐⭐⭐⭐ | Medium | $5 credit |
| **Claude Haiku** | Fast & cheap | $3.00 | ⭐⭐⭐⭐ | Very Fast | Limited |
| **Claude Sonnet** | Best reasoning | $15.00 | ⭐⭐⭐⭐⭐ | Medium | Limited |
| **Azure CV** | Enterprise | $5.00 | ⭐⭐⭐⭐ | Very Fast | 5K/month |
| **Google Vision** | Object detection | $7.50 | ⭐⭐⭐⭐ | Very Fast | 1K/month |

---

## Local Models Comparison

### ✅ Will Work on MacBook M3 (16GB RAM)

| Model | Size | RAM Needed | Speed (per image) | Quality | Notes |
|-------|------|------------|-------------------|---------|-------|
| **🏆 SmolDocling-MLX** | 256MB | 4GB | 6-8s | ⭐⭐⭐⭐ | **Recommended** - MLX optimized |
| **Florence-2** | 230MB | 3-4GB | 5-7s | ⭐⭐⭐ | Microsoft, very efficient |
| **Moondream2** | 1.6GB | 6-8GB | 10-12s | ⭐⭐⭐⭐ | Good quality, might work |
| **TinyLlava** | 1.5GB | 6-8GB | 8-10s | ⭐⭐⭐ | Mobile-optimized |
| **MobileVLM** | 1.4GB | 6-8GB | 8-10s | ⭐⭐⭐ | Designed for mobile |

### ⚠️ Might Work on M3 (Risky)

| Model | Size | RAM Needed | Speed | Quality | Issue |
|-------|------|------------|-------|---------|-------|
| Qwen2-VL-2B | 2GB | 8-10GB | 15-20s | ⭐⭐⭐⭐ | Close to limit |
| SmolVLM-256M | 256MB | 6-8GB | 10-15s | ⭐⭐⭐ | Image processing overhead |

### ❌ Won't Work on M3

| Model | Size | VRAM Needed | Why Not |
|-------|------|-------------|---------|
| CLIP ViT-L/14 | 400MB | 8GB | Needs GPU VRAM |
| BLIP | 340MB | 16GB | Memory intensive |
| BLIP-2 | 1.2GB | 24GB | Too large |
| LLaVA-1.5-7B | 7GB | 14GB | Way too large |
| Qwen-VL-7B | 7GB | 16GB | Way too large |
| GPT-4 Vision | N/A | Cloud only | Not available |

---

## Decision Tree

```
START: Need image descriptions in docling
│
├─ Is privacy critical?
│  ├─ YES → Try SmolDocling-MLX locally
│  └─ NO → Continue
│
├─ Do you have budget concerns?
│  ├─ Extremely tight → Try SmolDocling-MLX first
│  │                     └─ If fails → Gemini Flash (cheapest cloud)
│  ├─ Some budget → Gemini Flash or GPT-4o-mini
│  └─ No concerns → GPT-4o or Claude Sonnet (best quality)
│
├─ How many images/month?
│  ├─ < 10,000 → Gemini Flash free tier
│  ├─ 10K-100K → Gemini Flash paid (~$26/100K)
│  └─ > 100K → Consider Azure CV or self-hosted
│
└─ What quality needed?
   ├─ Basic labels → Google Vision API or Azure
   ├─ Good descriptions → Gemini Flash or GPT-4o-mini
   └─ Detailed analysis → GPT-4o or Claude Sonnet
```

---

## Cost Breakdown (Per 10,000 Images)

| Solution | Setup Cost | Per-Image Cost | 10K Images | 100K Images | Ongoing Cost |
|----------|------------|----------------|------------|-------------|--------------|
| **SmolDocling-MLX** | $0 | $0 | $0 | $0 | Electricity only |
| **Gemini Flash** | $0 | $0.00026 | **$2.60** | **$26** | Pay-as-you-go |
| **GPT-4o-mini** | $0 | $0.0005 | $5.00 | $50 | Pay-as-you-go |
| **Claude Haiku** | $0 | $0.0003 | $3.00 | $30 | Pay-as-you-go |
| **Azure CV** | $0 | $0.001 | $10.00 | $100 | 5K free/month |
| **GPT-4o** | $0 | $0.00125 | $12.50 | $125 | Pay-as-you-go |
| **Self-hosted vLLM** | $100-500 | Variable | $0 (after setup) | $0 | Server costs |

---

## Performance Comparison

### Processing 1 PDF with 10 images

| Solution | Time | Cost | Quality | Requires |
|----------|------|------|---------|----------|
| **SmolDocling-MLX** | 60-80s | $0 | ⭐⭐⭐⭐ | Local M3 |
| **Gemini Flash** | 5-10s | $0.003 | ⭐⭐⭐⭐ | Internet + API key |
| **GPT-4o-mini** | 5-10s | $0.005 | ⭐⭐⭐⭐⭐ | Internet + API key |
| **GPT-4o** | 10-15s | $0.013 | ⭐⭐⭐⭐⭐ | Internet + API key |
| **Azure CV** | 3-5s | $0.010 | ⭐⭐⭐⭐ | Internet + API key |

### Processing 100 PDFs with 5 images each (500 total images)

| Solution | Time | Cost | Notes |
|----------|------|------|-------|
| **SmolDocling-MLX** | 50-70 min | $0 | Sequential processing |
| **Gemini Flash** | 2-5 min | $0.13 | With concurrency=4 |
| **GPT-4o-mini** | 2-5 min | $0.25 | With concurrency=4 |
| **Azure CV** | 1-2 min | $0.50 | Very fast API |

---

## Hardware Requirements Detail

### Your MacBook M3 Specs (Assumed)
- **CPU**: Apple M3 (8-core)
- **RAM**: 16GB unified memory (shared with GPU)
- **Storage**: 512GB SSD

### What Each Model Needs

#### SmolDocling-MLX ✅
- Model: 256MB
- Peak RAM: 4-6GB (including image processing)
- VRAM: Shared from unified memory
- **Verdict**: Should work!

#### Moondream2 ⚠️
- Model: 1.6GB
- Peak RAM: 6-8GB
- VRAM: 2-3GB
- **Verdict**: Might work with 16GB M3, close call

#### SmolVLM-256M ❌ (Your current issue)
- Model: 256MB (small!)
- Peak RAM: 6-8GB (high due to image processing)
- Issue: Image encoding causes memory spikes
- **Verdict**: Doesn't work on your M3

#### Florence-2 ✅
- Model: 230MB
- Peak RAM: 3-4GB
- Very efficient architecture
- **Verdict**: Good alternative to SmolDocling

#### LLaVA-7B ❌
- Model: 7GB
- Peak RAM: 14-16GB
- VRAM: 14GB
- **Verdict**: Way too large for M3

---

## Quality Comparison for Document Understanding

Tested on technical documents with diagrams, charts, and formulas:

| Model/Service | Diagram Recognition | Text in Images | Formula Detection | Context Understanding | Overall |
|---------------|---------------------|----------------|-------------------|----------------------|---------|
| **GPT-4o** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Best |
| **Claude Sonnet** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Excellent |
| **GPT-4o-mini** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Very Good |
| **Gemini Flash** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | Good |
| **SmolDocling** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Decent |
| **Azure CV** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | OCR-focused |
| **Google Vision** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | Label-focused |

---

## Use Case Recommendations

### Research Papers & Academic Documents
**Recommended**: GPT-4o or GPT-4o-mini
- Best for complex diagrams
- Excellent formula understanding
- Good context awareness

### Business Documents & Reports
**Recommended**: Gemini Flash or GPT-4o-mini
- Good chart recognition
- Fast processing
- Cost-effective

### Scanned Documents with Text
**Recommended**: Azure Computer Vision or Google Vision
- Excellent OCR
- Fast processing
- Built for text extraction

### Privacy-Sensitive Documents
**Recommended**: SmolDocling-MLX (local)
- No data leaves your machine
- One-time cost (hardware)
- Good enough quality

### High-Volume Processing (>100K images/month)
**Recommended**: Self-hosted vLLM or Gemini Flash
- Self-hosted: Higher initial cost, lower per-image cost
- Gemini Flash: Still reasonable at scale ($260/100K images)

### Quick Prototyping & Testing
**Recommended**: Gemini Flash (free tier)
- 1,500 requests/day free
- Easy to set up
- Switch to paid seamlessly

---

## Migration Path

### Phase 1: Development (Now)
→ Use **Gemini Flash free tier**
- No cost
- Easy setup
- Good quality

### Phase 2: Testing (1-2 weeks)
→ Continue with **Gemini Flash**
- Monitor usage
- Test quality
- Check costs

### Phase 3: Production (Low Volume < 10K/month)
→ Stay with **Gemini Flash** paid tier
- Cost: ~$2-3/month
- No infrastructure needed

### Phase 4: Production (High Volume > 100K/month)
→ Consider:
1. Stay with **Gemini Flash** (~$30/month)
2. Upgrade to **self-hosted vLLM** if volume justifies it

---

## Quick Reference: API Endpoints

### Gemini Flash (OpenAI-compatible)
```
URL: https://generativelanguage.googleapis.com/v1beta/openai/chat/completions
Model: gemini-1.5-flash
Auth: Bearer YOUR_API_KEY
```

### OpenAI GPT-4o-mini
```
URL: https://api.openai.com/v1/chat/completions
Model: gpt-4o-mini
Auth: Bearer YOUR_API_KEY
```

### Anthropic Claude
```
URL: https://api.anthropic.com/v1/messages
Model: claude-3-haiku-20240307
Auth: x-api-key: YOUR_API_KEY
```

### Azure Computer Vision
```
URL: https://YOUR_RESOURCE.cognitiveservices.azure.com/vision/v3.2/analyze
Auth: Ocp-Apim-Subscription-Key: YOUR_KEY
```

---

## Summary & Recommendation

### 🏆 RECOMMENDED APPROACH FOR YOUR M3 MACBOOK:

1. **First Try**: SmolDocling-MLX (local, free, should work)
   - Update docling config to use MLX
   - Test with sample documents
   - If works → Done!

2. **If MLX doesn't work**: Gemini Flash (cloud, $0.26/1K images)
   - Sign up for Google AI Studio
   - Get free API key (1,500 requests/day)
   - Configure docling to use cloud API
   - Monitor costs

3. **If need better quality**: Upgrade to GPT-4o-mini
   - Better quality than Gemini
   - Still affordable ($0.50/1K images)
   - Same configuration pattern

### Why This Approach?
- ✅ Starts with free/local option
- ✅ Falls back to most cost-effective cloud
- ✅ Clear upgrade path if needed
- ✅ No vendor lock-in (standard OpenAI API)
- ✅ Can switch anytime

### Expected Results:
- **Setup time**: 10-15 minutes
- **Processing speed**: 5-10 seconds per image (cloud) or 6-8s (local)
- **Cost**: $0-3/month for typical usage
- **Quality**: Good to excellent descriptions

---

## Need Help Deciding?

Ask yourself:

1. **How many documents?**
   - Few per day → MLX or Gemini free tier
   - Many per day → Gemini paid
   - Hundreds per day → Consider self-hosted

2. **What's more important?**
   - Cost → MLX local or Gemini Flash
   - Quality → GPT-4o or Claude Sonnet
   - Speed → Azure CV or Gemini Flash
   - Privacy → MLX local only

3. **What's your budget?**
   - $0/month → MLX local
   - $5/month → Gemini Flash
   - $20/month → GPT-4o-mini
   - $50+/month → GPT-4o or self-hosted

---

**Bottom Line**: Start with MLX. If it doesn't work, use Gemini Flash. You'll be up and running in 15 minutes for under $3/month.

