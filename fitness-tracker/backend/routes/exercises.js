const express = require("express");
const exercisesRouter = express.Router();
const exerciseController = require("../controllers/exerciseController");

exercisesRouter.get("/", exerciseController.getAllExercises);

exercisesRouter.post("/add", exerciseController.addExercise);

module.exports = exercisesRouter;
