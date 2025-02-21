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

userRouter.get("/:id", async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id);
    response.json(user);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/:id/transactions", async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id).populate({
      path: "transactions", // Populate transactions info with all info
      populate: {
        path: "user", // Populate 'users' info found within transactions
        select: "username", // Only select 'username' to be shown under users
      },
    });

    const transactions = user.transactions;

    response.json(transactions);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/", async (request, response, next) => {
  try {
    const { username, password } = request.body; // Grabs and destructure username & password from request body (args)

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
    });

    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
