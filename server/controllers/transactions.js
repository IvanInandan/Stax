const transactionRouter = require("express").Router();
const middleware = require("../utils/middleware");
const Transaction = require("../models/transaction");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Get all transactions
transactionRouter.get("/", async (request, response, next) => {
  try {
    const transactions = await Transaction.find({}).populate("user", {
      username: 1,
      email: 1,
    }); // Populate replaces 'user: ${id}' field with values username/email by finding for an id match in 'user', defined by Ref: 'User'
    response.json(transactions);
  } catch (error) {
    next(error);
  }
});

// Get transaction by id
transactionRouter.get("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const transaction = await Transaction.findById(id).populate("user", {
      username: 1,
      email: 1,
    });

    if (!transaction) {
      return response.status(404).json({ error: "Transaction not found" });
    }

    response.json(transaction);
  } catch (error) {
    next(error);
  }
});

// Create new transaction
//NOTE: tokenDecoder middleware runs before all functions that contain it, and sets request.user for all routes
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

transactionRouter.delete(
  "/:id",
  middleware.tokenDecoder,
  async (request, response, next) => {
    try {
      const transaction = await Transaction.findById(request.params.id); // Match ID in param with transaction in database

      // If no match is found, return with error
      if (!transaction) {
        return response.status(404).json({ error: "transaction not found" });
      }

      const transactionUserId = transaction.user.toString(); // Grab 'user (id)' field of transaction (NOTE: it will be returned as an ObjectID), so we convert to string
      const tokenUserId = request.user.id; // Grab 'id' from request header of user

      // If token user does not match transaction creator
      if (transactionUserId !== tokenUserId) {
        return response.status(401).send({
          error: "Auth Error: token user does not match transaction user",
        });
      }

      const deletedTransaction = await Transaction.findByIdAndDelete(
        request.params.id
      );

      response.status(201).json(deletedTransaction);

      // Find user of transaction in database, update user's file to remove transaction from transactions array
      await User.findByIdAndUpdate(transactionUserId, {
        $pull: { transactions: request.params.id },
      });

      return;
    } catch (error) {
      next(error);
    }
  }
);

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
