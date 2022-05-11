import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";

export const store = configureStore({
  reducer: { userAuth: authReducer },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
