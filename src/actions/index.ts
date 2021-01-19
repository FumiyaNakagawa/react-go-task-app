export const TODO_ADD = 'TODO_ADD';
export const TODO_DELETE = 'TODO_DELETE';


let nextTodoId = 0


export const addTodo = (text: string) => ({
  type: TODO_ADD as typeof TODO_ADD,
  payload: { id: nextTodoId++, text },
});

export type TodoAction =
  | ReturnType<typeof addTodo>
