import LandingPage from "./components/pages/landing/LandingPage";
import DashboardPage from "./components/pages/dashboard/DashboardPage";

// // Import custom hooks
// import { useAuth } from "./hooks/useAuth";

// Import Libraries
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import Hero from "./components/pages/landing/Intro";

import { Toaster } from "sonner";
import { Skiper87 } from "./components/ui/skiper-ui/skiper87";

// // Import functions
// import { token, setToken } from "./services/apiClient";

const App = () => {
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
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/test" element={<Skiper87 />} />
      </Routes>

      <Toaster />
    </>
  );
};

export default App;
