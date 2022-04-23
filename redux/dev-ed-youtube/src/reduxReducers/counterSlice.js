import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//declare the initial state
const initialState = {
  status: "idle",
  value: 0,
};

//thunk is used for async functions
//apparently you should export EVERYTHING
export const incrementAsync = createAsyncThunk("counter", async () => {
  await fetch("https://www.thunderclient.com/welcome")
    .then((data) => console.log(data))
    .catch((err) => log(err.message));
});

//counterSlice will now hold the initial state in it
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

//selector
export const selectCount = (state) => state.counter.value;

//exporting actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//exporting the reducer
export default counterSlice.reducer;
