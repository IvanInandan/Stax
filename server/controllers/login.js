const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const loginRouter = require("express").Router();
const User = require("../models/user");

loginRouter.get("/", async (request, response, next) => {
  res.status(200).send({ "Secret Key": process.env.SECRET });
});

loginRouter.post("/", async (request, response, next) => {
  const { username, password } = request.body; // Get args ('username' and 'password') from request.body through destructuring
  const user = await User.findOne({ username }); // Find username in database
  const passwordCorrect = // If username does not exist, return null | If encrypted password does not match password hash in database, return false
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  // If user does not exist or password is wrong, return failure
  if (!(user && passwordCorrect)) {
    return response.status(401).json({ error: "invalid username or password" });
  }

  // Generate object for token (reason not passing whole user is because we don't want to include all info. username + id is fine)
  // --> more chance for info leak if all is included
  const userForToken = {
    username: user.username,
    id: user._id,
  };

  // Sign object with secret key to generate token
  const token = jwt.sign(userForToken, process.env.SECRET);

  response.status(200).send({
    token,
    username: user.username,
    email: user.email,
    id: user._id,
  });
});

module.exports = loginRouter;
