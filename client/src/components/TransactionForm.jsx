import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["Food", "Shopping", "Bills", "Entertainment", "Misc"];

  const createTransaction = (event) => {
    event.preventDefault();

    const transaction = {
      amount: amount,
      name: name,
      type: type,
      category: category,
    };

    // Reset form field values
    setAmount("");
    setName("");
    setType("");
    setCategory("");

    addTransaction(transaction);
  };

  return (
    <div>
      <h2 className="form-header">Add transaction</h2>
      <form onSubmit={createTransaction} className="flex flex-col gap-2">
        <div>
          <span className="text-white">Amount</span>
          <br />
          <input
            className="rounded-lg"
            type="number"
            value={amount}
            name="amount"
            id="amount"
            onChange={({ target }) => setAmount(target.value)}
          />
        </div>

        <div>
          <span className="text-white">Name</span>
          <br />
          <input
            className="rounded-lg"
            type="text"
            value={name}
            name="name"
            id="name"
            onChange={({ target }) => setName(target.value)}
          />
        </div>

        <div>
          <span className="text-white">Category</span>
          <br />
          <select
            className="rounded-lg"
            value={category}
            name="category"
            id="category"
            onChange={({ target }) => setCategory(target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>
            Debit
            <input
              type="radio"
              name="type" // Used for radio button grouping (ensures only one option can be selected)
              value="debit" // Value of button that will get set to state 'type'
              checked={type === "debit"} // Ensures that if state 'type' is debit, this button is selected
              onChange={({ target }) => setType(target.value)}
            />
          </label>
          <label>
            Credit
            <input
              type="radio"
              name="type" // Used for radio button grouping
              value="credit"
              checked={type === "credit"}
              onChange={({ target }) => setType(target.value)}
            />
          </label>
        </div>

        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default TransactionForm;
