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
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
      } = action.payload;

      if (droppableIdStart === droppableIdEnd) {
        // stateを変更してない時
        if (droppableIndexStart === droppableIndexEnd) {
          // タスクの順番を変えてない時
          return state;
        } else {
          // タスクの順番を変えた時
          let tasks = state.task;
          let [remove] = tasks.splice(droppableIndexStart, 1);
          tasks.splice(droppableIndexEnd, 0, remove);
          return {
            ...state,
            task: tasks.map((task, index) => ({
              ...task,
              sortIndex: index,
            })),
          };
        }
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default todoReducer;
