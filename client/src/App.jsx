import { useState, useEffect } from "react";
import Transaction from "./components/transaction";
import transactionService from "./services/transactions";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    transactionService
      .getAll()
      .then((transactions) => setTransactions(transactions));
  }, []);

  console.log(transactions);

  return (
    <div>
      <h1>Transactions</h1>
      {transactions.map((transaction, index) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default App;
