const transactionRouter = require("express").Router();
const middleware = require("../utils/middleware");
const Transaction = require("../models/transaction");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Get all transactions
transactionRouter.get("/", async (request, response, next) => {
  try {
    const transactions = await Transaction.find({});
    response.json(transactions);
  } catch (error) {
    next(error);
  }
});

// Get transaction by id
transactionRouter.get("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const transaction = await Transaction.findById(id);

    if (!transaction) {
      return response.status(404).json({ error: "Transaction not found" });
    }

    response.json(transaction);
  } catch (error) {
    next(error);
  }
});

// Create new transaction
transactionRouter.post(
  "/",
  middleware.tokenDecoder,
  async (request, response, next) => {
    try {
      const body = request.body; // Grab body data
      const decodedToken = request.user; // Grab decodedToken (user) in header

      // Find user associate to token in database
      const user = await User.findById(decodedToken.id);

      const transaction = new Transaction({
        type: body.type,
        name: body.name,
        category: body.category,
        amount: body.amount,
        user: decodedToken.id, // Attach token user to transaction object
      });

      const newTransaction = await transaction.save(); // Save transaction in database and capture response
      user.transactions = user.transactions.concat(newTransaction._id); // Concat transaction database ID into user's transaction array
      await user.save(); // Save user to finalize change to transaction array

      response.status(201).json(newTransaction);
    } catch (error) {
      // response.status(400).json(error); --> Used to check error by sending as a response, but then next() cannot be used
      // console.error(error) --> alternatively this can be used in conjunction with next()
      next(error);
    }
  }
);

transactionRouter.delete("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      return response.status(404).json({ error: "Transaction not found" });
    }

    response.status(201).json({ deleted: deletedTransaction });
  } catch (error) {
    next(error);
  }
});

transactionRouter.put("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const updatedFields = request.body;
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      updatedFields,
      {
        new: true,
      }
    );

    if (!updatedTransaction) {
      return response.status(404).json({ error: "Transaction not found" });
    }

    response.status(201).json({ updated: updatedTransaction });
  } catch (error) {
    next(error);
  }
});

module.exports = transactionRouter;
