import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: ["this is a test", "this is another test"],
};

export const commentSlice = createSlice({
  name: "commentsList",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
  },
});

export const selectComments = (state) => state.commentsList.comments;

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
