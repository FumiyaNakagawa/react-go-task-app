import { TodoAction, TodoActionType } from '../actions/index';

export interface Todo {
  id?: number,
  text?: string,
}

export interface TodoState {
  todos: any;
}


const initialState: Array<void> = [];

const todoReducer = (
  state: any = initialState,
  action: TodoAction,
): any => {
  switch (action.type) {
    case TodoActionType.ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
      default:
        return state
  }
}

export default todoReducer