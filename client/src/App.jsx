// Import hooks
import { useState, useEffect } from "react";

// Import components
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import MainContent from "./components/MainContent";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import DashboardLayout from "./components/DashboardLayout";

// Import API services
import transactionService from "./services/transactions";
import loginService from "./services/login";
import userService from "./services/user";

// Import libraries
import { Link, Routes, Route, useNavigate, Navigate } from "react-router-dom";

// Import Mantine UI
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // On page reload:
  useEffect(() => {
    // Grab 'loggeduser' variable from local storage cache
    const loggedUserJSON = window.localStorage.getItem("loggeduser");

    // If loggeduser exists in local storage
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON); // Parse JSON
      setUser(user); // Set user state to user stored in cache
      transactionService.setToken(user.token); // Set token used for transaction APIs

      // Grab transactions of logged in user
      userService
        .getTransactions(user.id)
        .then((transactions) => setTransactions(transactions));
    }
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
      window.localStorage.setItem("loggeduser", JSON.stringify(user)); // Storage user data in local cache
      transactionService.setToken(user.token); // Set token in transactionService APIs with token from login
      setUser(user); // Set 'user' state to returned object

      displayNotif("Successfully logged in!", true);

      // Fetch all transactions of logged in user
      const userTransactions = await userService.getTransactions(user.id);
      setTransactions(userTransactions);

      navigate("/dashboard");
    } catch (error) {
      displayNotif(error.response.data.error, false);
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();

    setUser(null);
    window.localStorage.clear();

    navigate("/home");
  };

  const loginForm = () => (
    <div>
      <LoginForm handleLogin={handleLogin} createUser={createUser} />
    </div>
  );

  // Call abstracted components here with notation: {component()}
  return (
    <MantineProvider>
      <Notification message={message} status={status} />

      <nav>
        <ul>
          {!user && (
            <>
              <div className="home-nav">
                <li>
                  <Link to="/login">Sign in</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </div>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" replace /> : <MainContent />
          }
        />
        <Route
          path="/login"
          element={
            <LoginForm handleLogin={handleLogin} createUser={createUser} />
          }
        />

        {user && (
          <>
            <Route
              path="/dashboard"
              element={
                <DashboardLayout>
                  <Dashboard transactions={transactions} />
                </DashboardLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <DashboardLayout>
                  <Settings />
                </DashboardLayout>
              }
            />
          </>
        )}
      </Routes>
    </MantineProvider>
  );
};

export default App;
