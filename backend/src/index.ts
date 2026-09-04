import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";

const app: Express = express();
app.use(cors());
const port = 3000;

const contatos = [
  {id: 1, name: "Cordeiro", email: "cordeiro@teste.com"},
  {id: 2, name: "Lobo", email: "lobo@teste.com"}, 
  {id: 3, name: "Chapelzin", email: "vermelho@teste.com"}
];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/contatos', (req: Request, res: Response) => {
  res.json(contatos);
});

app.listen(port, () => {
  console.log(`Servidor iniciado em : http://localhost:${port}`);
});