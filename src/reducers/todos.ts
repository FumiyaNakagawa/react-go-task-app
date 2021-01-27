import { TodoAction, TODO_ADD } from '../actions/index';

export interface Todo {
  id?: number,
  text?: string,
}

export interface TodoState {
  status: string;
  tasks: Todo[];
}

const initialState: TodoState = {status: 'In Progress', tasks: []};

// TODO: statusごとにタスク分ける
const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
      default:
        return state
  }
}

export default todoReducer