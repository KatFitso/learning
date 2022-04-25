import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//declare the initial state
const initialState = {
  status: "idle",
  value: 0,
};

//thunk is used for async functions
//apparently you should export EVERYTHING

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

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
    incrementIfOdd: (state, action) => {
      if (state.value % 2 === 1) {
        state.value += action.payload;
      }
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
export const { increment, decrement, incrementByAmount, incrementIfOdd } =
  counterSlice.actions;

//exporting the reducer
export default counterSlice.reducer;
