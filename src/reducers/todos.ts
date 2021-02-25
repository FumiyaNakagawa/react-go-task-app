import { TodoAction, TODO_ADD } from "../actions/index";

export interface Todo {
  id?: number;
  text?: string;
}

export interface TodoState {
  backlog: Todo[];
  inprogress: Todo[];
  done: Todo[];
}

const initialState: TodoState = {
  backlog: [],
  inprogress: [],
  done: [],
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        backlog: [...state.backlog, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
