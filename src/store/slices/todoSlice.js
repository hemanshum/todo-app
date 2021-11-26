import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
};

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addNewTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodos, addNewTodo, startLoading, stopLoading } =
  todoSlice.actions;

export default todoSlice.reducer;
