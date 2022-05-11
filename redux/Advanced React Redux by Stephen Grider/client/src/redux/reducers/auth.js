import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  authToken: "",
  errorMSg: "",
  loading: false,
};

export const loginUser = createAsyncThunk(
  "userAuth/loginUser",
  async (payload) => {
    const { email, password } = payload;
    const res = await axios.post("http://localhost:3001/api/auth/login", {
      email,
      password,
    });

    return res.data;
  }
);
export const signupUser = createAsyncThunk(
  "userAuth/signupUser",
  async (payload) => {
    const { email, password } = payload;
    const res = await axios.post("http://localhost:3001/api/auth/signup", {
      email,
      password,
    });

    return res.data;
  }
);

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    signoutUser: (state, action) => {
      state.authToken = "";
    },
  },
  extraReducers: (builder) => {
    //LOGIN USER
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { payload } = action;

        if (payload.err) {
          state.authToken = "";
          state.errorMSg = payload.msg;
          state.loading = false;
          return;
        }

        state.errorMSg = "";
        state.authToken = payload;
        state.loading = false;
      });

    //SIGNUP USER
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        const { payload } = action;
        if (payload.err) {
          state.authToken = "";
          state.errorMSg = payload.msg;
          state.loading = false;
          return;
        }

        state.errorMSg = "";
        state.authToken = payload;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        const { payload } = action;

        console.log(payload);
        return;
      });
  },
});

export const selectAuth = (state) => state.userAuth.authToken;
export const selectErr = (state) => state.userAuth.errorMSg;

export const { signoutUser } = authSlice.actions;
export default authSlice.reducer;
