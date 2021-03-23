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
  date: Date | null;
  status: string;
  sortIndex: number;
}

export interface TaskListObject {
  backlog: Todo[];
  inprogress: Todo[];
  done: Todo[];
}

export type TaskListKey = keyof TaskListObject;

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
      const taskList = Object.assign({}, state.taskList);

      taskList[status].splice(action.payload.sortIndex, 1);
      taskList[status] = taskList[status].map((task, index) => {
        return {
          ...task,
          sortIndex: index,
        };
      });

      return {
        ...state,
        taskList: {
          ...taskList,
        },
      };

    case TODO_EDIT:
      const editStatus = action.payload.status as TaskListKey;
      const editTaskList = Object.assign({}, state.taskList);

      editTaskList[editStatus] = editTaskList[editStatus].map((task) => {
        if (task.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return { ...task };
        }
      });

      return {
        ...state,
        taskList: {
          ...editTaskList,
        },
      };

    case DRAG_TASK:
      const dragTaskList = Object.assign({}, state.taskList);
      const droppableIdStart = action.payload.droppableIdStart as TaskListKey;
      const droppableIdEnd = action.payload.droppableIdEnd as TaskListKey;
      const { droppableIndexEnd, droppableIndexStart } = action.payload;

      let [remove] = dragTaskList[droppableIdStart].splice(
        droppableIndexStart,
        1
      );
      dragTaskList[droppableIdEnd].splice(droppableIndexEnd, 0, remove);

      dragTaskList[droppableIdStart] = dragTaskList[droppableIdStart].map(
        (task, index) => {
          return {
            ...task,
            sortIndex: index,
          };
        }
      );

      if (droppableIdStart !== droppableIdEnd) {
        dragTaskList[droppableIdEnd] = dragTaskList[droppableIdEnd].map(
          (task, index) => {
            return {
              ...task,
              status: droppableIdEnd,
              sortIndex: index,
            };
          }
        );
      }

      return {
        ...state,
        taskList: {
          ...dragTaskList,
        },
      };

    default:
      return state;
  }
};

export default todoReducer;
