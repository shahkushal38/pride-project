export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text: string) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text: string) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (text: string) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text },
});
