const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*'
}));

class App {
  constructor() {

    this.database();
    this.middlewares();
    this.routes();

    app.listen(8000, () =>
      console.log(`
      API rodando na porta 8000
                    
      http://localhost:8000`)
    );

    app.get('/', function (req, res) {
      res.send(`
      <!DOCTYPE html>
      <html lang="pt-br">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>API</title>
      </head>
      <body>
          <h1>API rodando com sucesso!</h1>
          <ul>
            <li><a href="/foods">Produtos</a></li>
            <li><a href="/clients">Clientes</a></li>
          </ul>
      </body>
      </html>
      `)
    })
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
  }

  middlewares() {
    app.use(express.json());
  }

  routes() {
    app.use(require("./routes/foodRoutes"));
    app.use(require("./routes/clientRoutes"));
  }
}

module.exports = new App().app;