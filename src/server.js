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

    app.listen(3001, () =>
      console.log(`
      API funcionando na porta 3001
                    
      http://localhost:3001`)
    );
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