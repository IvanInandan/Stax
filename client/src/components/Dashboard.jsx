import { useRef } from "react";
import Transaction from "./Transaction";
import TransactionForm from "./TransactionForm";
import Categories from "./Categories";
import Togglable from "./Togglable";

// Import API services
import transactionService from "../services/transactions";

import { Container, Grid, SimpleGrid, Skeleton } from "@mantine/core";

const Dashboard = ({ transactions }) => {
  const PRIMARY_COL_HEIGHT = "300px";
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

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
      <h1 className="text-white text-7xl font-bold">Dashboard</h1>

      <div className="my-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Primary column */}
          <div className="text-7xl text-white font-bold flex items-center justify-center">
            Hello
          </div>

          {/* Secondary grid inside second column */}
          <div className="grid grid-cols-1 gap-4">
            <div
              className="rounded-md bg-gray-300 dark:bg-gray-700"
              style={{ height: "calc(150px - 0.5rem)" }}
            />
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-md bg-gray-300 dark:bg-gray-700"
                style={{ height: "calc(150px - 0.5rem)" }}
              />
              <div
                className="rounded-md bg-gray-300 dark:bg-gray-700"
                style={{ height: "calc(150px - 0.5rem)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {transactionList()}
      {transactionForm()}
      <Categories transactions={transactions} />
    </div>
  );
};

export default Dashboard;
