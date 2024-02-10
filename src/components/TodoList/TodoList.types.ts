export interface ITodoItem {
  text: string;
  isCompleted: boolean | null;
}

export interface ITodoList {
  todos: Array<ITodoItem>;
  onRemovePressed: (text: string) => void;
  onCompletedPressed: (text: string) => void;
  onDisplayAlertClicked?: () => void;
}
