import cors from 'cors'; // npm i cors, npm i @types/cors
import express, { Application } from 'express'; // npm i express, npm i @types/express

// import Database from './database'; // importamos a classe Database, para que possamos utilizar os métodos de conexão com o banco de dados

import LoginRouter from './routes/Login.routes'; // importamos a rota de login

export default class App {
  private readonly app: Application; // criamos uma propriedade privada do tipo Application, para que possamos utilizar as funcionalidades do express

  constructor() {
    this.app = express(); // instanciamos o express, para que possamos utilizar suas funcionalidades
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json()); // habilitamos o express para receber requisições no formato json
    this.app.use(cors()); // habilitamos o cors para que possamos fazer requisições de outros domínios
  }

  private static db() {
    // const db = new Database();
    // db.connect();
    // return db;
  }

  private routes(): void {
    this.app.get('/', (req, res) => {
      res.send('Hello World');
    }); // criamos uma rota para testar se a aplicação está funcionando
    this.app.use(LoginRouter); // registramos a rota de login
  }
}
