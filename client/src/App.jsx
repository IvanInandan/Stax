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
  const [status, setStatus] = useState(null);

  useEffect(() => {
    transactionService
      .getAll()
      .then((transactions) => setTransactions(transactions));
  }, []);

  // Function in charge of displaying notification
  const displayNotif = (message, status) => {
    // Set message & status to arguments
    setMessage(message);
    setStatus(status);

    // Reset after 5 secods
    setTimeout(() => {
      setMessage(null);
      setStatus(null);
    }, 5000);
  };

  const addTransaction = async (transaction) => {
    try {
      const response = await transactionService.create(transaction);
      setTransactions((oldTransactions) => [...oldTransactions, response]); // Rebuild transactions array and set state
      displayNotif("Successfully added transaction!", true);
    } catch (error) {
      displayNotif(error.response.data.error, false);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      const response = await transactionService.remove(id);
      setTransactions((oldTransactions) =>
        oldTransactions.filter((transaction) => transaction.id !== id)
      );
      displayNotif("Successfully deleted transaction!", true);
    } catch (error) {
      displayNotif(error.response.data.error, false);
    }
  };

  return (
    <div>
      <Notification message={message} status={status} />
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
