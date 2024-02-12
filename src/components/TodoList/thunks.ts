import { ITodoItem } from "./TodoList.types";
import {
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosSuccess,
} from "./actions";

export const loadTodos = () => async (dispatch: any) => {
  try {
    dispatch(loadTodosInProgress());

    const response: ITodoItem = {
      text: "Test123",
      isCompleted: true,
    };
    // await fetch("http://localhost:8080/todos");

    const todos = response;

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e as string));
  }
};

export const displayAlert = (text: string) => () => {
  alert("Hello Error -" + text);
};
