# MedSimplify

MedSimplify is a college mini-project that turns complicated medical report language into clearer everyday English. It accepts pasted text or a selectable-text PDF, identifies common terms, and presents a structured explanation.

> **Medical safety:** This tool provides simplified explanations for informational purposes only. It does not diagnose disease, recommend treatment or medication, predict health outcomes, or replace a qualified healthcare professional.

## Project structure

- `frontend/` React + Vite interface with React Router, Axios, and Tailwind CSS configuration
- `backend/` Express API with Multer validation and temporary in-memory PDF forwarding
- `nlp-service/` FastAPI service using spaCy sentence segmentation and PyMuPDF extraction

## Run locally

Use three terminals from the `medsimplify` directory.

### 1. NLP service

```powershell
cd nlp-service
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The NLP service uses a reliable dictionary fallback and does not require a large transformer download. If `en_core_web_sm` is installed, spaCy uses it for sentence processing; otherwise its built-in sentencizer is used.

### 2. Backend

```powershell
cd backend
npm install
npm start
```

The Express API runs on `http://localhost:5000`. Copy `.env` to `.env.local` only when you need to customize the port or NLP URL.

### 3. Frontend

```powershell
cd frontend
npm install
copy .env.example .env
npm run dev
```

Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

## API endpoints

- `GET /api/health` returns `{ "status": "OK" }`
- `POST /api/report/simplify-text` accepts `{ "text": "..." }`
- `POST /api/report/upload` accepts a PDF in the `file` multipart field
- `GET /health` and `POST /simplify` are available directly on the NLP service

## Test data

Paste either of these into Analyze Report:

```text
Mild hepatomegaly with diffuse fatty infiltration of the liver.
```

```text
Cardiomegaly is noted. No focal pulmonary opacity is identified.
```

The first should explain an enlarged liver and extra liver fat. The second should explain an enlarged heart and the absence of a specific dense area in the lungs. Results are language simplifications, not clinical conclusions.

## Limitations

The PDF path extracts selectable text only. Scanned image PDFs need OCR, which is intentionally outside this simple first version. Uploaded files are held in memory while processed and are not stored permanently.
