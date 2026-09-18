import { extractPdfText, simplifyText } from '../services/nlpService.js';
import { fallbackSimplify } from '../services/fallbackSimplifier.js';

function sendError(response, error) {
  const status = error.response?.status === 422 ? 422 : 503;
  const message = error.response?.data?.detail || 'The report could not be analyzed right now.';
  response.status(status).json({ error: message });
}

export async function simplifyReportText(request, response) {
  const text = typeof request.body?.text === 'string' ? request.body.text.trim() : '';
  const language = typeof request.body?.language === 'string' ? request.body.language : 'en';
  if (!text) return response.status(400).json({ error: 'Please enter or paste a report before analyzing.' });
  if (text.length > 100_000) return response.status(413).json({ error: 'Please keep reports under 100,000 characters.' });
  try {
    const result = await simplifyText(text, language);
    response.json({ originalText: text, ...result });
  } catch (error) {
    if (!error.response && ['ECONNREFUSED', 'ECONNABORTED'].includes(error.code)) {
      return response.json({ originalText: text, ...fallbackSimplify(text, language), fallback: true });
    }
    sendError(response, error);
  }
}

export async function uploadReport(request, response) {
  if (!request.file) return response.status(400).json({ error: 'Please choose a PDF report to upload.' });
  try {
    const originalText = await extractPdfText(request.file);
    const result = await simplifyText(originalText, request.body?.language || 'en');
    response.json({ originalText, ...result });
  } catch (error) {
    sendError(response, error);
  }
}
