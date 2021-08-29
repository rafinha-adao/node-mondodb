const express = require("express");
const routes = express.Router();

const FoodController = require("../app/controller/foodController");

routes.get("/foods", FoodController.index);

routes.get("/foods/:id", FoodController.show);

routes.post("/foods/add", FoodController.store);

routes.put("/foods/update/:id", FoodController.update);

routes.delete("/foods/delete/:id", FoodController.destroy);

module.exports = routes;