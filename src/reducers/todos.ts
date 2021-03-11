import { TodoAction, TODO_ADD, TODO_DELETE, TODO_EDIT } from "../actions/index";

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
      state.task.map((task) => {
        console.log(task.status);
        if (task.id === action.payload.id) {
          task.status = "delete";
        }
        return false;
      });
      return {
        ...state,
        task: [...state.task],
      };
    case TODO_EDIT:
      state.task.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.text = action.payload.text;
          task.date = action.payload.date;
        }
        return false;
      });
      return {
        ...state,
        task: [...state.task],
      };
    default:
      return state;
  }
};

export default todoReducer;
