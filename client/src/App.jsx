// Import hooks
import { useState, useEffect, useRef } from "react";

// Import components
import Togglable from "./components/Togglable";
import Transaction from "./components/Transaction";
import Notification from "./components/Notification";
import TransactionForm from "./components/TransactionForm";
import Categories from "./components/Categories";
import LoginForm from "./components/LoginForm";

// Import API services
import transactionService from "./services/transactions";
import loginService from "./services/login";
import userService from "./services/user";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(null);

  // Declare reference variables
  const transactionFormRef = useRef();

  useEffect(() => {
    if (user) {
      transactionService
        .getAll()
        .then((transactions) => setTransactions(transactions));
    }
  }, [user]);

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

  const createUser = async (username, password) => {
    try {
      await userService.create({ username, password });
      displayNotif("Successfully created user!", true);
    } catch (error) {
      displayNotif(error.response.data.error, false);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const user = await loginService.login({ username, password });
      transactionService.setToken(user.token);
      setUser(user);
      displayNotif("Successfully logged in!", true);

      const userTransactions = await transactionService.getAll();
      setTransactions(userTransactions);
    } catch (error) {
      displayNotif(error.response.data.error, false);
    }
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

  const loginForm = () => (
    <div>
      <LoginForm handleLogin={handleLogin} createUser={createUser} />
    </div>
  );

  // Abstracted transactionList into own 'component'
  const transactionList = () => (
    <div>
      <h1>Transactions</h1>
      {transactions.map((transaction, index) => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          deleteTransaction={deleteTransaction}
        />
      ))}
    </div>
  );

  // Abstracted transactionForm into own 'component'
  const transactionForm = () => (
    <Togglable buttonLabel="add transaction" ref={transactionFormRef}>
      <TransactionForm addTransaction={addTransaction} />
    </Togglable>
  );

  // Call abstracted components here with notation: {component()}
  return (
    <div>
      <Notification message={message} status={status} />
      {!user && loginForm()}
      {user && (
        <div>
          {" "}
          {transactionList()}
          {transactionForm()}
          <Categories transactions={transactions} />
        </div>
      )}
    </div>
  );
};

export default App;
