import { Todo } from "../reducers/todos";

export const TODO_ADD = "TODO_ADD";
export const TODO_DELETE = "TODO_DELETE";

let nextTodoId = 0;

export const addTodo = (task: Todo) => ({
  type: TODO_ADD as typeof TODO_ADD,
  payload: { id: nextTodoId++, title: task.title, text: task.text },
});

export type TodoAction = ReturnType<typeof addTodo>;
