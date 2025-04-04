// Import API services
import transactionService from "../services/transactions";
import loginService from "../services/login";
import userService from "../services/user";

import { setUser, clearUser } from "../reducers/userReducer";
import { setTransactions } from "../reducers/transactionReducer";

const handleLogin = async (dispatch, username, password) => {
  try {
    const user = await loginService.login({ username, password });
    dispatch(setUser(user));

    window.localStorage.setItem("loggeduser", JSON.stringify(user)); // Store user data in local cache (useful for staying logged in on page reload)
    transactionService.setToken(user.token); // Set token in transactionService APIs with token from login

    //displayNotif("Successfully logged in!", true);

    // Fetch all transactions of logged in user
    const transactions = await userService.getTransactions(user.id);
    dispatch(setTransactions(transactions));
    return true;
  } catch (error) {
    return false;
    //displayNotif(error.response.data.error, false);
  }
};

const handleLogout = (dispatch, navigate, event) => {
  event.preventDefault();

  dispatch(clearUser());
  window.localStorage.clear();

  navigate("/");
};

const createUser = async (dispatch, navigate, username, password) => {
  try {
    await userService.create({ username, password });
    //displayNotif("Successfully created user!", true);
  } catch (error) {
    //displayNotif(error.response.data.error, false);
  }
};

export { handleLogin, handleLogout, createUser };
