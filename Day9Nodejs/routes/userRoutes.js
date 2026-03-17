const express = require("express");
const routes = express.Router();

const userController = require("../controller/userController");

routes.get("/users", userController.getUsers);
routes.get("/users/:id", userController.getUsersById);
routes.post("/users/addUser", userController.addUser);

module.exports = routes;