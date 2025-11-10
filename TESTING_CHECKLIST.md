# RAGy Testing Checklist

Use this checklist to verify everything works correctly.

## Pre-Testing Setup

```bash
# 1. Install dependencies
npm run setup

# 2. Start the application
npm run dev:all

# 3. Open browser
# http://localhost:5173
```

Expected: No errors in terminal, frontend loads

---

## Phase 1: Basic Functionality

### 1.1 Project Creation
- [ ] Click "Create New Project"
- [ ] Enter project name: "Test Project 1"
- [ ] Click "Create Project"
- [ ] **Expected**: Project created, workspace opens

### 1.2 File Upload
- [ ] See upload area with drag-drop zone
- [ ] Create test file: `echo "Test content" > test.txt`
- [ ] Drag `test.txt` to upload area
- [ ] **Expected**: File appears in list with size
- [ ] Click "Continue to Chunking"
- [ ] **Expected**: Moved to step 2

### 1.3 Chunking
- [ ] See "Docling Hybrid" method selected
- [ ] Configuration shows: max_tokens: 512, merge_peers: true
- [ ] Click "Start Chunking"
- [ ] **Expected**: Button shows "Chunking Documents..."
- [ ] Wait for completion (may take 1-2 minutes first time)
- [ ] **Expected**: Moved to chunk preview

### 1.4 Chunk Preview
- [ ] See total chunks count
- [ ] See statistics (avg tokens, source files)
- [ ] Click to expand a chunk
- [ ] **Expected**: Full text and metadata shown
- [ ] Click "Random Sample"
- [ ] **Expected**: Page changes to random chunks
- [ ] Click "Approve & Continue"
- [ ] **Expected**: Moved to embedding model selection

### 1.5 Embedding Model Selection
- [ ] See 3 models listed
- [ ] "all-MiniLM-L6-v2" is recommended
- [ ] Select "all-MiniLM-L6-v2"
- [ ] Click "Start Embedding"
- [ ] **Expected**: Progress page appears

### 1.6 Embedding Progress
- [ ] See progress bar
- [ ] See percentage updating
- [ ] See batch progress (e.g., "Batch 1 / 10")
- [ ] See speed (chunks/sec)
- [ ] See ETA
- [ ] **Expected**: Progress reaches 100%
- [ ] **Expected**: "Embeddings Complete!" message
- [ ] **Expected**: Auto-advance to testing

### 1.7 RAG Testing
- [ ] See vector database listed
- [ ] Database shows chunk count and dimensions
- [ ] Enter query: "test"
- [ ] Click "Search"
- [ ] **Expected**: Results appear
- [ ] **Expected**: Similarity scores shown
- [ ] Click to expand a result
- [ ] **Expected**: Full text shown

---

## Phase 2: Advanced Features

### 2.1 Multiple Projects
- [ ] Click back arrow to projects list
- [ ] Click "Create New Project"
- [ ] Create "Test Project 2"
- [ ] **Expected**: New project created
- [ ] Go back to projects
- [ ] **Expected**: Both projects visible
- [ ] Click first project
- [ ] **Expected**: Opens previous project state

### 2.2 Multiple Files
- [ ] Create multiple test files
  ```bash
  echo "File 1 content" > file1.txt
  echo "File 2 content" > file2.txt
  echo "File 3 content" > file3.txt
  ```
- [ ] Upload all 3 files at once
- [ ] **Expected**: All 3 files appear
- [ ] Remove one file (click X)
- [ ] **Expected**: File removed from list
- [ ] Continue to chunking
- [ ] **Expected**: Only 2 files chunked

### 2.3 Pre-Chunked Upload
- [ ] Start new project
- [ ] On chunking step, see "Upload Chunked JSON"
- [ ] Create test JSON:
  ```json
  [
    {"text": "Chunk 1 text", "metadata": {"source": "test"}},
    {"text": "Chunk 2 text", "metadata": {"source": "test"}}
  ]
  ```
- [ ] Save as `chunks.json`
- [ ] Click "Upload Chunked JSON"
- [ ] Select `chunks.json`
- [ ] **Expected**: Skip to chunk preview
- [ ] **Expected**: 2 chunks visible

### 2.4 Multiple Vector Databases
- [ ] Complete project with one model (e.g., MiniLM)
- [ ] In RAG testing, click "Create Another Vector DB"
- [ ] Select different model (e.g., BGE)
- [ ] Generate embeddings
- [ ] **Expected**: Testing shows 2 vector DBs
- [ ] Query with both selected
- [ ] **Expected**: Comparison table shows both
- [ ] **Expected**: Results for each model shown

### 2.5 PDF Upload (if available)
- [ ] Upload a PDF file
- [ ] **Expected**: File accepted
- [ ] Chunk the PDF
- [ ] **Expected**: Chunks generated
- [ ] **Expected**: Metadata shows page numbers

---

## Phase 3: Error Handling

### 3.1 Invalid File
- [ ] Try uploading `.exe` or `.dmg` file
- [ ] **Expected**: Error or file rejected
- [ ] **Expected**: Clear error message

### 3.2 Empty Project
- [ ] Create project, don't upload files
- [ ] Try to continue
- [ ] **Expected**: Button disabled or error

### 3.3 Network Issues
- [ ] Start chunking
- [ ] Stop backend (`Ctrl+C` in server terminal)
- [ ] **Expected**: Error message shown
- [ ] Restart backend
- [ ] **Expected**: Can retry

### 3.4 Large File
- [ ] Try uploading file > 100MB (if available)
- [ ] **Expected**: Error or timeout
- [ ] **Expected**: Graceful handling

---

## Phase 4: Performance Testing

### 4.1 Small Document (< 10 pages)
- [ ] Upload small document
- [ ] Time the chunking process
- [ ] **Expected**: < 30 seconds
- [ ] Time the embedding (MiniLM)
- [ ] **Expected**: < 2 minutes

### 4.2 Medium Document (50-100 pages)
- [ ] Upload medium document
- [ ] Time the chunking
- [ ] **Expected**: 1-3 minutes
- [ ] Time the embedding
- [ ] **Expected**: 3-10 minutes
- [ ] Query performance
- [ ] **Expected**: < 500ms

### 4.3 Multiple Queries
- [ ] Run 10 queries in quick succession
- [ ] **Expected**: All complete without errors
- [ ] **Expected**: Consistent response times

---

## Phase 5: UI/UX Testing

### 5.1 Visual Quality
- [ ] Check all text is readable
- [ ] Check colors are consistent (grey theme)
- [ ] Check hover effects work
- [ ] Check progress bars animate smoothly
- [ ] Check expandable sections work
- [ ] Check buttons have hover states

### 5.2 Responsive Design
- [ ] Resize browser window
- [ ] **Expected**: Layout adjusts
- [ ] Try on different screen sizes
- [ ] **Expected**: No horizontal scroll

### 5.3 Navigation
- [ ] Use browser back button
- [ ] **Expected**: Stays within app
- [ ] Use back arrow in header
- [ ] **Expected**: Returns to projects
- [ ] Step indicator shows current step
- [ ] **Expected**: Visual indicator correct

### 5.4 Loading States
- [ ] All loading states show spinner or message
- [ ] No "blank" periods
- [ ] Button states change (disabled when loading)

---

## Phase 6: Data Persistence

### 6.1 Project Persistence
- [ ] Create project with data
- [ ] Refresh browser
- [ ] **Expected**: Projects still visible
- [ ] Open project
- [ ] **Expected**: All data intact

### 6.2 Vector DB Persistence
- [ ] Generate vector DB
- [ ] Restart backend
- [ ] Query vector DB
- [ ] **Expected**: Works without regenerating

### 6.3 File Persistence
- [ ] Check `data/projects/{id}/raw-files/`
- [ ] **Expected**: Uploaded files present
- [ ] Check `data/projects/{id}/chunked-data/`
- [ ] **Expected**: `chunks.json` present
- [ ] Check `data/projects/{id}/vector-dbs/`
- [ ] **Expected**: Vector DB files present

---

## Phase 7: Edge Cases

### 7.1 Special Characters
- [ ] Create project with name "Test 🚀 Project!"
- [ ] **Expected**: Works correctly
- [ ] Upload file with special chars in name
- [ ] **Expected**: Works correctly

### 7.2 Long Content
- [ ] Upload document with very long paragraphs
- [ ] **Expected**: Chunks appropriately
- [ ] Query with long query text
- [ ] **Expected**: Handles correctly

### 7.3 Empty Chunks
- [ ] Upload file with mostly whitespace
- [ ] **Expected**: Filters or handles empty chunks

### 7.4 Duplicate Files
- [ ] Upload same file twice
- [ ] **Expected**: Both uploaded or one rejected (either OK)

---

## Phase 8: Browser Console

### 8.1 No Errors
- [ ] Open browser DevTools (F12)
- [ ] Go through complete flow
- [ ] **Expected**: No red errors in console
- [ ] Yellow warnings OK if minor

### 8.2 Network Tab
- [ ] Check API calls succeed (200 status)
- [ ] Check WebSocket connection established
- [ ] Check no failed requests

---

## Test Results Template

```
Date: _______________
Tester: _______________
OS: _______________
Browser: _______________

✅ Passed: _____ / _____
❌ Failed: _____ / _____

Issues Found:
1. _____________________
2. _____________________
3. _____________________

Performance Notes:
- Chunking time: _____
- Embedding time: _____
- Query time: _____

Overall Rating: ___ / 10
```

---

## Critical Issues (Fix Immediately)

- [ ] Cannot create projects
- [ ] Cannot upload files
- [ ] Chunking fails completely
- [ ] Embedding fails completely
- [ ] Queries return no results
- [ ] WebSocket doesn't connect

## Minor Issues (Fix Later)

- [ ] UI glitches
- [ ] Slow but works
- [ ] Missing tooltips
- [ ] Unclear error messages

---

**When all checkboxes are ticked, Phase 1 is validated!** ✅

