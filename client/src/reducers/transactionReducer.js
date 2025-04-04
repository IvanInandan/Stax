import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    setTransactions: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
