import { Todo } from "../reducers/todos";

export const TODO_ADD = "TODO_ADD";
export const TODO_DELETE = "TODO_DELETE";

let nextTodoId = 0;

export const addTodo = (task: Todo) => ({
  type: TODO_ADD as typeof TODO_ADD,
  payload: {
    id: nextTodoId++,
    title: task.title,
    text: task.text,
    date: task.date,
    status: task.status,
  },
});

export const deleteTodo = (task: Todo) => ({
  type: TODO_DELETE as typeof TODO_DELETE,
  payload: {
    id: task.id,
    title: task.title,
    text: task.text,
    date: task.date,
  },
});

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>;
