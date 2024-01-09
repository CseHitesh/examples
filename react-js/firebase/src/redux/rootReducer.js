import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import userSlice from "./slices/userSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  count: counterSlice.reducer,
});
