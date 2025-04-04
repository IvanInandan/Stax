import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import transactionReducer from "./reducers/transactionReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionReducer,
  },
});

export default store;
