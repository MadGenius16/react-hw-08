import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiRegister } from "./operations";

const INITIAL_STATE = {
  user: { 
    name: null, 
    email: null 
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
    .addCase(apiRegister.pending, (state) => {
      state.error = true;
    })
    .addCase(apiRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(apiRegister.rejected, (state, action) => {
      state.error = action.payload;
    })
    .addCase(apiLogin.pending, (state) => {
      state.error = true;
    })
    .addCase(apiLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(apiLogin.rejected, (state, action) => {
      state.error = action.payload;
    }),
});

export const authReducer = authSlice.reducer;
