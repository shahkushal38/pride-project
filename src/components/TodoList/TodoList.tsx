import { connect } from "react-redux";
import { ITodoItem, ITodoList } from "./TodoList.types";
import "./TodoList.css";
import { markTodoAsCompleted, removeTodo } from "./actions";
import { TodoListItem } from "./TodoListItem/TodoListItem";
import NewTodoForm from "./NewTodoForm/NewTodoForm";
import { displayAlert } from "./thunks";

function TodoList(props: ITodoList): JSX.Element {
  const { todos = [], onRemovePressed, onCompletedPressed } = props;
  console.log("In todo List props - ", props);

  return (
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
}

const mapStateToProps = (state: any) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRemovePressed: (text: string) => dispatch(removeTodo(text)),
  onCompletedPressed: (text: string) => dispatch(markTodoAsCompleted(text)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
