import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 4000;

app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.listen(port, () => console.log(`Listening on: http://localhost:${port}`));