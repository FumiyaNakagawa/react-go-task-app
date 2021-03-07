import { TodoAction, TODO_ADD, TODO_DELETE } from "../actions/index";

export interface Todo {
  id?: number;
  title?: string;
  text?: string;
  date?: Date;
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
    case TODO_DELETE:
      state.backlog.some(function (v, i) {
        if (v.id == action.payload.id) state.backlog.splice(i, 1);
      });

      console.log(state);
      return {
        ...state,
        backlog: [...state.backlog],
      };
    default:
      return state;
  }
};

export default todoReducer;
