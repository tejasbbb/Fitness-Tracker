const express = require("express");
const usersRouter = express.Router();
const userController = require("../controllers/userController");

usersRouter.get("/", userController.getAllUsers);

usersRouter.post("/add", userController.addUser);

module.exports = usersRouter;
