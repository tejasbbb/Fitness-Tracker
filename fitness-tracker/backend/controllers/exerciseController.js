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
      await Exercise.create({
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date),
        weight: Number(req.body.weight),
      });
      return res.status(200).json("Exercise ADDED");
    } catch (err) {
      return next({
        err: "Trouble creating a new exercise (middleware: exerciseController.addExercise)",
      });
    }
  },

  async findExercise(req, res, next) {
    try {
      console.log("Here");
      const exercise = await Exercise.findById(req.params.id);
      console.log(exercise);
      return res.status(200).json(exercise);
    } catch (err) {
      console.log("ERROR");
      return next({ err: "Trouble finding exercise" });
    }
  },

  async deleteExercise(req, res, next) {
    try {
      await Exercise.findByIdAndDelete(req.params.id);
      return res.status(200).json("deleted");
    } catch (err) {
      return next({ err: "Trouble finding exercise" });
    }
  },

  async updateExercise(req, res, next) {
    try {
      const { username, description, duration, date, weight } = req.body;
      const updatedExerciseData = {
        username,
        description,
        duration,
        date,
        weight,
      };
      await Exercise.findByIdAndUpdate(req.params.id, updatedExerciseData, {
        new: true,
        runValidators: true,
      });
      return res.status(200).json("Exercise UPDATED!");
    } catch (err) {
      return next({ err: "Trouble updating exercise" });
    }
  },
};

module.exports = exerciseController;
