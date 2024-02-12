import { ITodoItem } from "./TodoList.types";
import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
} from "./actions";

export const isLoading = (state: boolean = false, action: any) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_FAILURE:
      return true;
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_SUCCESS:
      return false;
    default:
      return true;
  }
};

export const todos = (stateArray: Array<ITodoItem> = [], action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return stateArray.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return stateArray.filter((todo) => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return stateArray.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    default:
      return stateArray;
  }
};
