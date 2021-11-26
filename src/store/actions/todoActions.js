import {
  setTodos,
  addNewTodo,
  startLoading,
  stopLoading,
} from "../slices/todoSlice";
import serverAPI from "../../apis/server";

export const fetchTodos = () => async (dispatch, getState) => {
  const userId = getState().auth.user.objectId;
  try {
    dispatch(startLoading());
    const response = await serverAPI.get("/classes/todos", {
      params: {
        where: { createdBy: userId, done: false },
        order: "-createdAt",
      },
    });
    dispatch(setTodos(response.data.results));
    dispatch(stopLoading());
  } catch (error) {
    console.log(error.message);
  }
};

export const addTodo = (data) => async (dispatch, getState) => {
  const userId = getState().auth.user.objectId;
  const todoData = {
    todo: data,
    createdBy: userId,
  };
  try {
    dispatch(startLoading());
    const response = await serverAPI.post("/classes/todos", todoData);
    const todoId = response.data.objectId;
    const newTodo = await serverAPI.get(`/classes/todos/${todoId}`);
    dispatch(addNewTodo(newTodo.data));
    dispatch(stopLoading());
  } catch (error) {
    console.log(error.message);
  }
};
