import cors from 'cors'; // npm i cors, npm i @types/cors
import express, { Application } from 'express'; // npm i express, npm i @types/express

import dotenv from 'dotenv'; // npm i dotenv, npm i @types/dotenv

import Database from './database'; // importamos a classe Database, para que possamos conectar com o banco de dados.

import LoginRouter from './routes/Login.routes';

export default class App {
  public app: Application; // criamos uma propriedade privada do tipo Application, para que possamos utilizar as funcionalidades do express

  constructor() {
    this.app = express(); // instanciamos o express, para que possamos utilizar suas funcionalidades.

    App.loadEnv(); // chamamos o método loadEnv, para que possamos carregar as variáveis de ambiente.

    this.middlewares(); // chamamos o método middlewares, para que possamos carregar os middlewares da aplicação.

    this.routes(); // chamamos o método routes, para que possamos carregar as rotas da aplicação.
    App.db(); // chamamos o método db, para que possamos conectar com o banco de dados
  }

  private static loadEnv(): void {
    dotenv.config(); // carregamos as variáveis de ambiente.
  }

  private static db(): void {
    Database.connect(); // conectamos com o banco de dados
  }

  private middlewares(): void {
    this.app.use(express.json()); // habilitamos o express para receber requisições no formato json
    this.app.use(cors()); // habilitamos o cors para que possamos fazer requisições de outros domínios
  }

  private routes(): void {
    this.app.get('/', (req, res) => {
      res.send('Hello World');
    }); // criamos uma rota para testar se a aplicação está funcionando
    this.app.use(LoginRouter); // registramos a rota de login
  }
}
