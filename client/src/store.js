import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import transactionReducer from "./reducers/transactionReducer";
import notificationReducer from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionReducer,
    notification: notificationReducer,
  },
});

export default store;
