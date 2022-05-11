import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

export const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    authUser: (state) => {
      state.auth = !state.auth;
    },
  },
});

export const selectAuth = (state) => state.authUser.auth;

export const { authUser } = authSlice.actions;
export default authSlice.reducer;
