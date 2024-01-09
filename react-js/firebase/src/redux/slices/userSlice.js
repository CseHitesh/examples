import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUsersApi } from "../api/userApi.js";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await getUsersApi();
  return response;
});

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default userSlice;
