# SmolVLM Backend Comparison: Transformers vs MLX

**Generated:** 2025-11-12 21:35:39

**Hardware:** Apple M3

## Performance Summary

| Metric | Transformers (MPS) | MLX | Speedup |
|--------|-------------------|-----|----------|
| Model Load Time | 5.41s | 0.50s | 10.9x |
| Total Inference Time | 17.49s | 9.70s | 1.8x |
| Avg Time per Image | 3.50s | 1.94s | **1.8x faster** |
| Images Processed | 5 | 5 | - |

## Detailed Results

### Transformers (MPS Backend)

- **page1_img1.jpeg**: 4.77s
  - _The image is a book cover. The cover is predominantly black with a fiery backgro_

- **page20_img1.png**: 2.60s
  - _The image contains a blue background with white and light blue clouds. The text _

- **page20_img2.png**: 2.21s
  - _In the foreground of the image there is a pen and a book._

- **page26_img1.jpeg**: 3.93s
  - _The image depicts a black-and-white photograph of four children sitting on a ben_

- **page26_img2.jpeg**: 3.98s
  - _The image depicts a black-and-white photograph of several air conditioning units_

### MLX (Apple Silicon Optimized)

- **page1_img1.jpeg**: 2.16s
  - _ The image is a book cover. The book cover is black with the title "Heat and Mas_

- **page20_img1.png**: 2.00s
  - _ There is a blue background with white text that reads "ptd". The letters are in_

- **page20_img2.png**: 1.93s
  - _ It looks like a poster with a pen and a word that says EJS. The word EJS is in _

- **page26_img1.jpeg**: 1.96s
  - _ The people in the image are all sitting on a bench. The bench is white and the _

- **page26_img2.jpeg**: 1.65s
  - _ The image is a black and white photograph of an air conditioning unit. The air _


## Recommendation

⚠️ **MLX recommended** - 1.8x faster but smaller improvement

