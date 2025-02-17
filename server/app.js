require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

// Define utils
const config = require("./utils/config");
const middleware = require("./utils/middleware");

// Define controllers (routers)
const transactionRouter = require("./controllers/transactions");
const homeRouter = require("./controllers/home");

// Define URL from config util
const url = config.MONGODB_URI;
console.log("app.js -- connecting to: ", url);

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose
  .connect(url)
  .then((result) => {
    console.log("app.js -- connected to MongoDB");
  })
  .catch((error) => {
    console.log("app.js -- error connecting to MongoDB");
  });

app.use(cors()); // Allows your port (server) to be reached by other ports (front-end, other users, etc)
app.use(express.json()); // JSON Parser (parses request body to JSON before sending to routes)
app.use(middleware.requestLogger); // Print request to console BEFORE sending

app.use("/", homeRouter);
app.use("/api/transactions", transactionRouter);

// Middlewares executed after requests
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
