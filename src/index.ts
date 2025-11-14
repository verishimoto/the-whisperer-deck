import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'WhispererDeck PaaS API',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`WhispererDeck running on http://localhost:${port}`);
});
