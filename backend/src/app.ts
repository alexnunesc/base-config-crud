import cors from 'cors'; // npm i cors, npm i @types/cors
import express, { Application } from 'express'; // npm i express, npm i @types/express

const app: Application = express(); // instanciamos o express, para que possamos utilizar suas funcionalidades

app.use(cors()); // habilitamos o cors, para que o backend possa ser acessado por qualquer frontend
