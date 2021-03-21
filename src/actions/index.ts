import { Todo } from "../reducers/todos";

export const TODO_ADD = "TODO_ADD";
export const TODO_DELETE = "TODO_DELETE";
export const TODO_EDIT = "TODO_EDIT";
export const DRAG_TASK = "DRAG_TASK";

export interface DragIds {
  droppableIdStart: string;
  droppableIdEnd: string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
  draggableId: string;
}

export const addTodo = (task: Todo) => ({
  type: TODO_ADD as typeof TODO_ADD,
  payload: {
    id: task.id,
    title: task.title,
    text: task.text,
    date: task.date,
    status: task.status,
    sortIndex: task.sortIndex,
  },
});

export const deleteTodo = (task: Todo) => ({
  type: TODO_DELETE as typeof TODO_DELETE,
  payload: {
    id: task.id,
    title: task.title,
    text: task.text,
    date: task.date,
    status: task.status,
    sortIndex: task.sortIndex,
  },
});

export const editTodo = (task: Todo) => ({
  type: TODO_EDIT as typeof TODO_EDIT,
  payload: {
    id: task.id,
    title: task.title,
    text: task.text,
    date: task.date,
    status: task.status,
    sortIndex: task.sortIndex,
  },
});

export const dragTask = (dragIds: DragIds) => ({
  type: DRAG_TASK as typeof DRAG_TASK,
  payload: dragIds,
});

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof editTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof dragTask>;
