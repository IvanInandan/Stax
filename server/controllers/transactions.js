const transactionRouter = require("express").Router();
const Transaction = require("../models/transaction");

// Get all transactions
transactionRouter.get("/", async (request, response, next) => {
  try {
    const transactions = await Transaction.find({});
    response.json({ transactions: transactions });
  } catch (error) {
    next(error);
  }
});

transactionRouter.post("/", async (request, response, next) => {
  try {
    const body = request.body;
    const transaction = new Transaction(body);
    const newTransaction = await transaction.save();
    response.status(201).json(newTransaction);
  } catch (error) {
    next(error);
  }
});

module.exports = transactionRouter;
