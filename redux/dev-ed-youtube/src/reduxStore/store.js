import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reduxReducers/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
