import App from './app'; // importamos a classe App, para que possamos instanciar a aplicação.

const server = new App().app; // instanciamos a aplicação.

const port = process.env.PORT || 3333; // definimos a porta que a aplicação irá rodar.

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); // iniciamos a aplicação.
