import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //   state.user = action.payload;
    },
    removeTodo: (state, action) => {
      //   state.user = null;
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice;
