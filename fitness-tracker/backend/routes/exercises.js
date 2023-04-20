const express = require("express");
const exercisesRouter = express.Router();
const exerciseController = require("../controllers/exerciseController");

exercisesRouter.get("/", exerciseController.getAllExercises);

exercisesRouter.get("/:id", exerciseController.findExercise);

exercisesRouter.post("/add", exerciseController.addExercise);

exercisesRouter.delete("/:id", exerciseController.deleteExercise);

exercisesRouter.post("/update/:id", exerciseController.updateExercise);

module.exports = exercisesRouter;
