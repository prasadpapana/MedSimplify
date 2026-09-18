import { Router } from 'express';
import multer from 'multer';

import { simplifyReportText, uploadReport } from '../controllers/reportController.js';

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_request, file, callback) => callback(null, file.mimetype === 'application/pdf')
});

router.post('/simplify-text', simplifyReportText);
router.post('/upload', (request, response, next) => upload.single('file')(request, response, (error) => {
  if (error?.code === 'LIMIT_FILE_SIZE') return response.status(413).json({ error: 'PDF files must be smaller than 10 MB.' });
  if (error) return response.status(400).json({ error: 'Only PDF files are supported.' });
  next();
}), uploadReport);

export default router;
