import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
};

const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setActiveTodos: (state, action) => {
      state.todos = action.payload;
    },
    addNewTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    doneTodo: (state, action) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.objectId === action.payload
      );
      state.todos[todoIndex].done = !state.todos[todoIndex].done;
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.objectId !== action.payload
      );
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
export const {
  setActiveTodos,
  addNewTodo,
  doneTodo,
  startLoading,
  stopLoading,
  todoDeleted,
} = todoSlice.actions;

export default todoSlice.reducer;
