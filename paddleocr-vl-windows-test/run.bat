@echo off
echo ================================================================================
echo PaddleOCR-VL Test Runner - Improved Version with Batch Processing
echo ================================================================================
echo.
echo This will automatically:
echo   1. Detect your GPU (RTX 4070)
echo   2. Process in batches of 5 pages (prevents RAM overflow)
echo   3. Clear GPU memory between batches
echo   4. Save results to output_improved folder
echo   5. Log everything to console_log_improved.txt
echo.
if "%1"=="" (
    echo Default: Processing test_document_pages100-130.pdf (31 pages, harder test)
    echo.
    echo To use a different PDF: run.bat your_file.pdf
) else (
    echo Processing: %1
)
echo.
echo Press Ctrl+C to cancel, or
pause

if "%1"=="" (
    venv\Scripts\python.exe test_paddleocr_vl.py
) else (
    venv\Scripts\python.exe test_paddleocr_vl.py %1
)

set EXIT_CODE=%ERRORLEVEL%

echo.
echo ================================================================================
echo.
if %EXIT_CODE% EQU 0 (
    echo SUCCESS! Check the output_improved folder for results.
    echo Log file: console_log_improved.txt
    echo.
    echo Output files:
    echo   - document.md (combined markdown from all pages)
    echo   - summary.json (processing stats)
    echo   - page_N/ (individual page results)
    echo   - page_N/imgs/ (extracted images)
) else (
    echo ERROR! Script failed with exit code %EXIT_CODE%
    echo Check console_log_improved.txt for error details.
)
echo.
pause
