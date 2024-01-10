import authSlice from "./slices/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  todo: todoSlice.reducer,
});
