const transactionRouter = require("express").Router();
const Transaction = require("../models/transaction");

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
transactionRouter.post("/", async (request, response, next) => {
  try {
    const body = request.body;
    const transaction = new Transaction(body);
    const newTransaction = await transaction.save();
    response.status(201).json({ added: newTransaction });
  } catch (error) {
    // response.status(400).json(error); --> Used to check error by sending as a response, but then next() cannot be used
    // console.error(error) --> alternatively this can be used in conjunction with next()
    next(error);
  }
});

transactionRouter.delete("/:id", async (request, response, next) => {
  try {
    const id = request.params.id;
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!updatedTransaction) {
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
