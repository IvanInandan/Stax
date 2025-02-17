const homeRouter = require("express").Router();

homeRouter.get("/", async (request, response, next) => {
  try {
    response.json({
      message: "Hello! This is the home page of 'Wallet Watchers'",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = homeRouter;
