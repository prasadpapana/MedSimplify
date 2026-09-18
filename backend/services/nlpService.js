import axios from 'axios';
import FormData from 'form-data';

const nlpClient = axios.create({
  baseURL: process.env.NLP_SERVICE_URL || 'http://localhost:8000',
  timeout: 60_000
});

export async function simplifyText(text, language = 'en') {
  const response = await nlpClient.post('/simplify', { text, language });
  return response.data;
}

export async function extractPdfText(file) {
  const form = new FormData();
  form.append('file', file.buffer, { filename: file.originalname, contentType: 'application/pdf' });
  const response = await nlpClient.post('/extract', form, { headers: form.getHeaders() });
  return response.data.text;
}
