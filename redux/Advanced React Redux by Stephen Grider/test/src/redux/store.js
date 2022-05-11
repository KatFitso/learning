import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "./middleware/reduxLogger";
import stateValidatorMiddleware from "./middleware/stateValidationMiddeware";
import authSlice from "./reducers/authReducer";
import commentsSlice from "./reducers/commentsReducer";

export const store = configureStore({
  reducer: {
    commentsList: commentsSlice,
    authUser: authSlice,
  },
  devTools: true,

  //this is an array of all the middlewares that you want to use
  //default loads 3 middlewares and if this not not called the default is only those 3
  //[thunk, immutableStateInvariant, serializableStateInvariant]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, stateValidatorMiddleware),
});
