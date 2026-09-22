import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import reportRoutes from './routes/reportRoutes.js';

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.get('/api/health', (_request, response) => response.json({ status: 'OK' }));
app.use('/api/report', reportRoutes);
app.use((_request, response) => response.status(404).json({ error: 'Route not found.' }));
app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: 'Something went wrong on the server.' });
});

export default app;

if (process.env.VERCEL !== '1') {
  app.listen(port, () => console.log(`MedSimplify backend listening on http://localhost:${port}`));
}
