import express, { Express, Request, Response } from 'express';
import path from 'path';
import { prompts } from './prompts';

const app: Express = express();
const port = process.env.PORT || 8080;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

// API endpoint to get the prompts data
app.get('/api/prompts', (req: Request, res: Response) => {
  res.json(prompts);
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// All other GET requests return the frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, () => {
  console.log(`WhispererDeck server running on http://localhost:${port}`);
});
