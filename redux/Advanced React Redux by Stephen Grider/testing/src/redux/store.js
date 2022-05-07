import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./reducers/commentsReducer";

export const store = configureStore({
  reducer: {
    commentsList: commentsSlice,
  },
});
