import authSlice from "./slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
