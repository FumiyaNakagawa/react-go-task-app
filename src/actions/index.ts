let nextTodoId = 0

export enum TodoActionType {
  ADD = 'TODO/ADD',
  DELETE = 'TODO/DELETE',
}

export interface TodoAction {
  type: TodoActionType;
  id: number;
  text?: string;
}

export const addTodo = (text: string): TodoAction => ({
  type: TodoActionType.ADD,
  id: nextTodoId++,
  text,
});
