// Import hooks
import { useState, useEffect } from "react";

// Import components
import Transaction from "./components/Transaction";
import Notification from "./components/Notification";
import TransactionForm from "./components/TransactionForm";

// Import API services
import transactionService from "./services/transactions";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    transactionService
      .getAll()
      .then((transactions) => setTransactions(transactions));
  }, []);

  const addTransaction = async (transaction) => {
    try {
      const response = await transactionService.create(transaction);
      setTransactions((oldTransactions) => [...oldTransactions, response]); // Rebuild transactions array and set state
    } catch (error) {
      setMessage(error.response.data.error); // Set message state to error
      setTimeout(() => {
        setMessage(null);
      }, 5000); // After 5 seconds, set message state to null
    }
  };

  const deleteTransaction = async (id) => {
    try {
      const response = await transactionService.remove(id);
      console.log(response);
      setTransactions((oldTransactions) =>
        oldTransactions.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      setMessage(error.response.data.error); // Set message state to error
      setTimeout(() => {
        setMessage(null);
      }, 5000); // After 5 seconds, set message state to null
    }
  };

  return (
    <div>
      <Notification message={message} />
      <h1>Transactions</h1>
      {transactions.map((transaction, index) => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}

      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
