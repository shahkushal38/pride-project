export interface ITodoItem {
  text: string;
  isCompleted: boolean | null;
}

export interface ITodoList {
  todos: Array<ITodoItem>;
  isLoading: boolean;
  startLoadingTodos: () => void;
  onRemovePressed: (text: string) => void;
  onCompletedPressed: (text: string) => void;
  onDisplayAlertClicked?: () => void;
}
