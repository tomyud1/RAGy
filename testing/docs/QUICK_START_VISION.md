# Quick Start: Image Descriptions in RAGy

**5-minute guide to enable AI image descriptions**

---

## 🚀 Option 1: Local MLX (Try First!)

### Test if it works:

```bash
cd /Users/tomeryud/projects/RAGy
python3 test_vision_setup.py
```

If tests pass, you're done! No cloud needed.

---

## ☁️ Option 2: Cloud (Gemini Flash)

### 1. Get API Key (2 minutes)

Visit: https://aistudio.google.com/app/apikey

Click "Create API Key" → Copy it

### 2. Set Environment (30 seconds)

```bash
cd /Users/tomeryud/projects/RAGy

# Add to .env file or export:
export USE_CLOUD_VISION=true
export CLOUD_VISION_PROVIDER=gemini
export GOOGLE_API_KEY=your_key_here
```

### 3. Test It (1 minute)

```bash
python3 test_vision_setup.py --cloud gemini
```

Should show all ✅ green checks!

### 4. Process Documents (30 seconds)

```bash
# Process a PDF with images
python3 server/python/docling_chunker.py your-document.pdf
```

Done! 🎉

---

## 📊 Cost Tracker

**Gemini Flash pricing:**
- Free: 1,500 images/day
- Paid: $0.26 per 1,000 images

**Your usage:**
- Check dashboard: https://aistudio.google.com/app/apikey
- Estimated monthly: ~$2-5 for typical use

---

## 🔧 Configuration Options

### Adjust Settings

```bash
# Reduce speed if rate-limited
export VISION_CONCURRENCY=1

# Increase timeout for large images
export VISION_TIMEOUT=60

# Shorter descriptions
export VISION_MAX_TOKENS=200
```

---

## ❓ Troubleshooting

### "API key not found"
```bash
# Make sure it's exported:
echo $GOOGLE_API_KEY
# Should print your key
```

### "Rate limit exceeded"
```bash
# Reduce concurrency:
export VISION_CONCURRENCY=1
```

### "Still getting memory errors"
```bash
# Switch to cloud:
export USE_CLOUD_VISION=true
```

---

## 📚 Full Documentation

- **Complete research**: `CLOUD_IMAGE_DESCRIPTION_RESEARCH.md`
- **Implementation guide**: `IMPLEMENTATION_GUIDE_CLOUD_VISION.md`
- **Model comparison**: `VISION_MODELS_COMPARISON.md`
- **This summary**: `README_VISION_RESEARCH.md`

---

## 🎯 Quick Commands Reference

```bash
# Test local setup
python3 test_vision_setup.py

# Test cloud (Gemini)
export GOOGLE_API_KEY=your_key
python3 test_vision_setup.py --cloud gemini

# Test cloud (OpenAI)
export OPENAI_API_KEY=your_key
python3 test_vision_setup.py --cloud openai

# Full test with sample doc
python3 test_vision_setup.py --cloud gemini --full-test

# Process document
python3 server/python/docling_chunker.py document.pdf

# Check environment
echo $USE_CLOUD_VISION
echo $GOOGLE_API_KEY
```

---

## 🏆 Recommended Setup

**For most users:**

1. Try local MLX first (free)
2. If fails, use Gemini Flash (free tier: 1,500/day)
3. Upgrade to paid if you exceed free tier

**Total time**: 5-15 minutes  
**Cost**: Free for most usage, ~$2-5/month for heavy use

---

## 📞 Need Help?

Run the test script with verbose output:
```bash
python3 test_vision_setup.py --cloud gemini 2>&1 | tee test-output.log
```

Review the log file for specific errors.

---

**Ready? Start here:**

```bash
cd /Users/tomeryud/projects/RAGy
python3 test_vision_setup.py
```

Good luck! 🚀

