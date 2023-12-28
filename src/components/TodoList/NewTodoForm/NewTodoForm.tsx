import { useState } from "react";
import { connect } from "react-redux";
import "./NewTodoForm.css";
import { createTodo } from "../actions";
import { ITodoItem } from "../TodoList.types";

export interface INewTodoForm {
  todos: Array<ITodoItem>;
  onCreatePressed: (text: string) => void;
}

const NewTodoForm = (props: INewTodoForm): JSX.Element => {
  const { todos, onCreatePressed } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
  onCreatePressed: (text: string) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
