import { isConstructorDeclaration } from "typescript";
import {
  TodoAction,
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
  DRAG_TASK,
} from "../actions/index";
import TaskList from "../containers/TaskList";

export interface Todo {
  id: string;
  title: string;
  text: string;
  date: Date;
  status: string;
  sortIndex: number;
}

export interface TaskListObject {
  backlog: Todo[];
  inprogress: Todo[];
  done: Todo[];
}

type TaskListKey = keyof TaskListObject

export interface TodoState {
  taskList: TaskListObject;
}

const initialState: TodoState = {
  taskList: {
    backlog: [],
    inprogress: [],
    done: [],
  },
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        taskList: {
          ...state.taskList,
          backlog: [...state.taskList.backlog, action.payload],
        },
      };
    case TODO_DELETE:
      const status = action.payload.status as TaskListKey;
      const taskList = Object.assign({}, state.taskList)

      taskList[status].splice(action.payload.sortIndex, 1);
      taskList[status] = taskList[status].map((task, index) => {
        return {
          ...task,
          sortIndex: index,
        }
      });

      return {
        ...state,
        taskList: {
          ...taskList,
        }
      }


    // case TODO_EDIT:
    //   return {
    //     ...state,
    //     task: state.task.map((task) => {
    //       if (task.id === action.payload.id) {
    //         return { ...action.payload };
    //       } else {
    //         return { ...task };
    //       }
    //     }),
    //   };
    // case DRAG_TASK:
    //   const {
    //     droppableIdStart,
    //     droppableIdEnd,
    //     droppableIndexEnd,
    //     droppableIndexStart,
    //   } = action.payload;

    //   console.log("====================================");
    //   console.log(droppableIdStart);
    //   console.log(droppableIdEnd);
    //   console.log(droppableIndexEnd);
    //   console.log(droppableIndexStart);
    //   console.log("====================================");

    //   if (droppableIdStart === droppableIdEnd) {
    //     // stateを変更してない時
    //     if (droppableIndexStart === droppableIndexEnd) {
    //       // タスクの順番を変えてない時
    //       return state;
    //     } else {
    //       // タスクの順番を変えた時
    //       let tasks = state.task;
    //       let [remove] = tasks.splice(droppableIndexStart, 1);
    //       tasks.splice(droppableIndexEnd, 0, remove);
    //       return {
    //         ...state,
    //         task: tasks.map((task, index) => ({
    //           ...task,
    //           sortIndex: index,
    //         })),
    //       };
    //     }
    //   } else {
    //     return state;
    //   }

    default:
      return state;
  }
};

export default todoReducer;
