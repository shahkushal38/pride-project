import { ITodoItem } from "./TodoList.types";
import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from "./actions";

export const todos = (stateArray: Array<ITodoItem> = [], action: any) => {
  console.log("Action -- ", action);
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      console.log("state array - ", stateArray);
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
