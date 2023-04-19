const User = require("../models/user.model");

const userController = {
  async getAllUsers(req, res, next) {
    try {
      const result = await User.find({});
      return res.status(200).json(result);
    } catch (err) {
      return next({
        err: "Trouble getting all users from the database (middleware: userController.getAllUsers)",
      });
    }
  },

  async addUser(req, res, next) {
    try {
      const user = await User.create({
        username: req.body.username,
      });
      return res.status(400).json("User ADDED");
    } catch (err) {
      return next({
        err: "Trouble creating a new User (middleware: userController.addUser)",
      });
    }
  },
};

module.exports = userController;
