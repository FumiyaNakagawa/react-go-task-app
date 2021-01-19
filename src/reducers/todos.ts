import { TodoAction, TODO_ADD } from '../actions/index';

export interface Todo {
  id?: number,
  text?: string,
}

export interface TodoState {
  todos: any;
}


const initialState: any = {};

const todoReducer = (
  state: any = initialState,
  action: TodoAction,
): any => {
  switch (action.type) {
    case TODO_ADD:
      console.log(state.tasks)
      return {
        ...state,
        tasks: [{id: action.payload.id, text: action.payload.text}],
      }
      default:
        return state
  }
}

export default todoReducer