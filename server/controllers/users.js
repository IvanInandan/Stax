const bcrypt = require("bcryptjs");
const userRouter = require("express").Router();
const User = require("../models/user");

userRouter.get("/", async (request, response, next) => {
  try {
    const users = await User.find({});
    response.json(users);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/", async (request, response, next) => {
  try {
    const { username, password, email } = request.body; // Grabs and destructure username, password, and email from request body (args)

    if (password.length < 3) {
      return response
        .status(400)
        .json({ error: "password must be longer than 3 characters" });
    }

    // Generate password hash using bcryptjs library
    const saltRound = 10;
    const passwordHash = await bcrypt.hash(password, saltRound);

    const user = new User({
      username,
      passwordHash,
      email,
    });

    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
