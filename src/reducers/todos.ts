import { TodoAction, TODO_ADD, TODO_DELETE } from "../actions/index";

export interface Todo {
  id?: number;
  title?: string;
  text?: string;
  date?: Date;
  status?: string;
}

export interface TodoState {
  task: Todo[];
}

const initialState: TodoState = {
  task: [],
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case TODO_DELETE:
      return state;
    default:
      return state;
  }
};

export default todoReducer;
