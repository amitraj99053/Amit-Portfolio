import sys
try:
    import PyPDF2
    with open(r"C:\Users\amitr\Downloads\Amit Kumar Resume AI.pdf", "rb") as f:
        reader = PyPDF2.PdfReader(f)
        text = "".join(page.extract_text() for page in reader.pages)
        print(text)
except Exception as e:
    print("Error in Python PDF:", e)
