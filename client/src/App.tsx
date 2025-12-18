import LandingPage from "./components/pages/LandingPage";

// // Import custom hooks
// import { useAuth } from "./hooks/useAuth";

// Import Libraries
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// // Import functions
// import { token, setToken } from "./services/apiClient";

const App = () => {
  const [user, _setUser] = useState(false);

  // const { cacheUser } = useAuth();
  // const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   // If user doesn't exist in global state, search browser cache
  //   if (!user) {
  //     const cachedUserJSON = window.localStorage.getItem("user");

  //     // If exists in cache, set in global state
  //     if (cachedUserJSON) {
  //       const cachedUser = JSON.parse(cachedUserJSON); // Parse JSON
  //       cacheUser(cachedUser);
  //       setToken(cachedUser.token);

  //       // Grab recipes of logged in user
  //     }
  //   }
  // }, [user]);

  return (
    <div>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            !user ? <LandingPage /> : <Navigate to="/dashboard" replace />
          }
        />

        {/* Protected routes, only accessible if the user is authenticated */}
        {user && (
          <>
            {/* <Route
              path="/dashboard"
              element={
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              }
            /> */}
          </>
        )}

        {/* If the user is not authenticated and tries to access protected routes */}
        <Route path="/dashboard" element={<Navigate to="/" replace />} />
      </Routes>

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
    </div>
  );
};

export default App;
