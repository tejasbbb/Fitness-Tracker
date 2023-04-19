const Exercise = require("../models/exercise.model");

const exerciseController = {
  async getAllExercises(req, res, next) {
    try {
      const result = await Exercise.find({});
      return res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  },

  async addExercise(req, res, next) {
    try {
      const exercise = await Exercise.create({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
        weight: Number(req.body.weight),
      });
      return res.status(400).json("Exercise ADDED");
    } catch (err) {
      return next({
        err: "Trouble creating a new exercise (middleware: exerciseController.addExercise)",
      });
    }
  },
};

module.exports = exerciseController;
