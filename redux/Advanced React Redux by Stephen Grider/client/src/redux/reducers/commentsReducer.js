import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: ["testing", "testing 2"],
};

// modern redux uses thunk to create async function in the reducer
export const fetchComments = createAsyncThunk(
  "commentsList/fetchComments",
  async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    //anything returned here is considered to be in the action.payload
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
      // the two below are totally optional but i was just practicing them all
      //you will see the action in the logger regardless of adding this or not
      .addCase(fetchComments.rejected, () => {
        console.log("fetch failed");
      })
      .addCase(fetchComments.pending, () => {
        console.log("fetch pending");
      });
  },
});

export const selectComments = (state) => state.commentsList.comments;

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
