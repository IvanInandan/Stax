const mongoose = require("mongoose");

// Schema for transaction model
const transactionSchema = new mongoose.Schema({
  amount: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// Alters the JSON that is returned as a response, but does NOT affect database storage
transactionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Defines Transaction model and it will be stored in MongoDB collections as plural of argument
// const 'Transaction' is irrelevant, collection name will be plural form of first argument ("[...], transactionSchema")
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
