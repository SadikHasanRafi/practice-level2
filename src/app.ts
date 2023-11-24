import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

//parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

export default app;
