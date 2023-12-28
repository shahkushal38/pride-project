import { ITodoItem } from "../TodoList.types";

export interface ITodoListItem {
  todo: ITodoItem;
  onRemovePressed: (test: string) => void;
  onCompletedPressed: (test: string) => void;
}
