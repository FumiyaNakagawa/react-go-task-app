import {
  TodoAction,
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
  DRAG_TASK,
} from "../actions/index";

export interface Todo {
  id: string;
  title: string;
  text: string;
  date: Date;
  status: string;
  sortIndex: number;
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
      return {
        ...state,
        task: state.task.map((task) => {
          if (task.id === action.payload.id) {
            return { ...action.payload };
          } else {
            return { ...task };
          }
        }),
      };
    case DRAG_TASK:
      console.log("------------------------------------------------");
      console.log(action);
      console.log("------------------------------------------------");
      return state;
    default:
      return state;
  }
};

export default todoReducer;
