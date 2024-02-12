import { connect } from "react-redux";
import { ITodoItem, ITodoList } from "./TodoList.types";
import "./TodoList.css";
import { markTodoAsCompleted, removeTodo } from "./actions";
import { TodoListItem } from "./TodoListItem/TodoListItem";
import NewTodoForm from "./NewTodoForm/NewTodoForm";
import { useEffect } from "react";
import { loadTodos } from "./thunks";

const TodoList = (props: ITodoList) => {
  const {
    todos = [],
    onRemovePressed,
    onCompletedPressed,
    isLoading,
    startLoadingTodos,
  } = props;
  console.log("In todo List props - ", props);

  useEffect(() => {
    startLoadingTodos();
  }, [startLoadingTodos]);

  const loadingMessage = <div> Loading Todos...</div>;

  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo: ITodoItem) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state: any) => ({
  isLoading: state.loading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRemovePressed: (text: string) => dispatch(removeTodo(text)),
  onCompletedPressed: (text: string) => dispatch(markTodoAsCompleted(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
