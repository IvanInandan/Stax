import { useRef } from "react";
import Transaction from "./Transaction";
import TransactionForm from "./TransactionForm";
import Categories from "./Categories";
import Togglable from "./Togglable";

// Import API services
import transactionService from "../services/transactions";

const Dashboard = ({ transactions }) => {
  // Declare reference variables
  const transactionFormRef = useRef();

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
      transactionFormRef.current.toggleVisibility(); // Toggle visibility of Togglable component
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

  // Abstracted transactionList into own 'component'
  const transactionList = () => {
    const total = transactions.reduce((count, transaction) => {
      return count + Number(transaction.amount);
    }, 0);

    return (
      <div>
        <h1>Transactions</h1>
        <h2>Total: ${total}</h2>
        {transactions.map((transaction, index) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </div>
    );
  };

  // Abstracted transactionForm into own 'component'
  const transactionForm = () => (
    <Togglable buttonLabel="add transaction" ref={transactionFormRef}>
      <TransactionForm
        addTransaction={addTransaction}
        transactions={transactions}
      />
    </Togglable>
  );

  return (
    <div>
      <h1>Dashboard</h1>
      {transactionList()}
      {transactionForm()}
      <Categories transactions={transactions} />
    </div>
  );
};

export default Dashboard;
