import "./TodoListItem.css";
import { ITodoListItem } from "./TodoListItem.types";

export function TodoListItem(props: ITodoListItem): JSX.Element {
  const { todo, onRemovePressed, onCompletedPressed } = props;

  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? null : (
          <button
            onClick={() => onCompletedPressed(todo.text)}
            className="completed-button"
          >
            Mark As Completed
          </button>
        )}
        <button
          onClick={() => onRemovePressed(todo.text)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
