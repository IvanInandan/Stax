// Import hooks
import { useEffect } from "react";

import { setUser } from "./reducers/userReducer";
import { setTransactions } from "./reducers/transactionReducer";

// Import components
import MainContent from "./components/MainContent";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import DashboardLayout from "./components/DashboardLayout";
import Authentication from "./components/MantineUI/Authentication";

// Import API services
import transactionService from "./services/transactions";
import userService from "./services/user";

// Import libraries
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            !user ? <MainContent /> : <Navigate to="/dashboard" replace />
          }
        />
        <Route path="/login" element={<Authentication />} />

        {/* Protected routes, only accessible if the user is authenticated */}
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

        {/* If the user is not authenticated and tries to access protected routes */}
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
        <Route path="/settings" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
