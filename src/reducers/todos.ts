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

export interface TodoState {
  taskList: {
    backlog: Todo[];
    inprogress: Todo[];
    done: Todo[];
    delete: Todo[];
  };
}

const initialState: TodoState = {
  taskList: {
    backlog: [],
    inprogress: [],
    done: [],
    delete: [],
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
    // case TODO_DELETE:
    //   const status = action.payload.status
    //   console.log(status)
    //   if (status === 'backlog') {
    //     state.taskList.backlog.map((task) => {
    //       return {
    //         ...state,
    //         if (task.id === action.payload.id) {
    //           task.status = 'delete';
    //         }
    //       };
    //     })
    //   } else if (status === 'inprogress') {

    //   } else if (status === 'done') {

    //   }
      

      // state.taskList.map((task) => {
      //   console.log(task.status);
      //   if (task.id === action.payload.id) {
      //     task.status = "delete";
      //   }
      //   return false;
      // });
      // return {
      //   ...state,
      //   taskList: {...state.taskList},
      // };
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
