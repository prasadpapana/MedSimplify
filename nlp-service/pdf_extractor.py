from io import BytesIO

import fitz


def extract_pdf_text(file_bytes: bytes) -> str:
    """Extract selectable text from a PDF; OCR is intentionally out of scope."""
    with fitz.open(stream=BytesIO(file_bytes), filetype="pdf") as document:
        pages = [page.get_text("text") for page in document]
    return "\n".join(pages).strip()
