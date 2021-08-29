const express = require("express");
const routes = express.Router();

const FoodController = require("../app/controller/clientController");

routes.get("/clients", FoodController.index);

routes.get("/clients/:id", FoodController.show);

routes.post("/clients/add", FoodController.store);

routes.put("/clients/update/:id", FoodController.update);

routes.delete("/clients/delete/:id", FoodController.destroy);

module.exports = routes;