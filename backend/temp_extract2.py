import sys
try:
    import fitz  # PyMuPDF
    doc = fitz.open(r"C:\Users\amitr\Downloads\Amit Kumar Resume AI.pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    print(text)
except ImportError:
    print("PyMuPDF not installed, please install it via pip.")
except Exception as e:
    print(f"Error extracting PDF: {e}")
