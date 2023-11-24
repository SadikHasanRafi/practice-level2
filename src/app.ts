import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/config/modules/students/student.route';

const app = express();

//parsers
app.use(express.json());
app.use(cors());
app.use('/student', StudentRoutes);

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World!');
});

export default app;
