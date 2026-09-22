import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: 65_000
});

export async function simplifyText(text, language = 'en') {
  const { data } = await api.post('/api/report/simplify-text', { text, language });
  return data;
}

export async function uploadPdf(file, language = 'en') {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('language', language);
  const { data } = await api.post('/api/report/upload', formData);
  return data;
}
