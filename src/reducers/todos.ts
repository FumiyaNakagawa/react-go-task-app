import { TodoAction, TodoActionType } from '../actions/index';

export interface Todo {
  id?: number,
  text?: string,
}

export interface TodoState {
  todos: any;
}


const initialState: any = {todos: {id: 1, text: "adfad"}};

const todoReducer = (
  state: any = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD:
      return {
        ...state,
        todos: [ ...state, {id: action.id, text: action.text} ]
      }
      default:
        return state
  }
}

export default todoReducer