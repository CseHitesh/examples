import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../api/auth";
export const registerUser = createAsyncThunk(
  "users/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await registerApi(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "users/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await loginApi(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  user: [],
  token: null,
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      //for register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data;
        state.token = {
          accessToken: payload.data.accessToken,
          refreshToken: payload.data.refreshToken,
        };
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.message;
      })

      // for login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data.user;
        state.token = {
          accessToken: payload.data.accessToken,
          refreshToken: payload.data.refreshToken,
        };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.message;
      });
  },
});
export default authSlice;
