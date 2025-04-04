// Import hooks
import { useEffect } from "react";

import { setUser } from "./reducers/userReducer";
import { setTransactions } from "./reducers/transactionReducer";

// Import components
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import MainContent from "./components/MainContent";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import DashboardLayout from "./components/DashboardLayout";

// Import API services
import transactionService from "./services/transactions";
import userService from "./services/user";

// Import libraries
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const transactions = useSelector((state) => state.transactions);
  const notification = useSelector((state) => state.notification);

  // On page reload:
  useEffect(() => {
    // Grab 'loggeduser' variable from local storage cache
    if (!user) {
      const loggedUserJSON = window.localStorage.getItem("loggeduser");

      // If loggeduser exists in local storage
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON); // Parse JSON
        dispatch(setUser(user));
        transactionService.setToken(user.token); // Set token used for transaction APIs

        // Grab transactions of logged in user
        userService
          .getTransactions(user.id)
          .then((transactions) => dispatch(setTransactions(transactions)));
      }
    }
  }, [user, dispatch]);

  // Call abstracted components here with notation: {component()}
  return (
    <>
      <Notification notification={notification} />

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
            !user ? <MainContent /> : <Navigate to="/dashboard" replace />
          }
        />
        <Route path="/login" element={<LoginForm />} />

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
    </>
  );
};

export default App;
