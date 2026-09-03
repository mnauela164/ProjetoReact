import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

const contatos = [
  {id: 1, nome: "Cordeiro", email: "cordeiro@teste.com"},
  {id: 2, nome: "Lobo", email: "lobo@teste.com"}, 
  {id: 3, nome: "Chapelzin", email: "vermelho@teste.com"}
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