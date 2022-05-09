import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import commentsSlice from "./reducers/commentsReducer";

export const store = configureStore({
  reducer: {
    commentsList: commentsSlice,
    authUser: authSlice,
  },
});
