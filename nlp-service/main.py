from fastapi import FastAPI, File, HTTPException, UploadFile
from pydantic import BaseModel, Field

from pdf_extractor import extract_pdf_text
from simplifier import simplify_report

app = FastAPI(title="MedSimplify NLP Service", version="1.0.0")


class SimplifyRequest(BaseModel):
    text: str = Field(min_length=1, max_length=100_000)
    language: str = "en"


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "OK"}


@app.post("/simplify")
def simplify(request: SimplifyRequest) -> dict:
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Report text cannot be empty.")
    return simplify_report(request.text, request.language)


@app.post("/extract")
async def extract(file: UploadFile = File(...)) -> dict[str, str]:
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Only PDF files are supported.")
    try:
        text = extract_pdf_text(await file.read())
    except Exception as error:
        raise HTTPException(status_code=400, detail="Unable to read this PDF.") from error
    if not text:
        raise HTTPException(status_code=422, detail="Unable to extract readable text from this PDF.")
    return {"text": text}
