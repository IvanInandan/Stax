// Import hooks
import { useState, useEffect } from "react";

// Import components
import Transaction from "./components/Transaction";
import TransactionForm from "./components/TransactionForm";

// Import API services
import transactionService from "./services/transactions";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    transactionService
      .getAll()
      .then((transactions) => setTransactions(transactions));
  }, []);

  const addTransaction = async (transaction) => {
    try {
      const response = await transactionService.create(transaction);
      console.log(response);
      setTransactions((oldTransactions) => [...oldTransactions, response]);
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Transactions</h1>
      {transactions.map((transaction, index) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}

      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
};

export default App;
