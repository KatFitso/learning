import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: ["testing", "testing 2"],
};

export const fetchComments = createAsyncThunk(
  "commentsList/fetchComments",
  async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return res.data.map((each) => each.body);
  }
);

export const commentSlice = createSlice({
  name: "commentsList",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, () => {
        console.log("fetch failed");
      });
  },
});

export const selectComments = (state) => state.commentsList.comments;

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
