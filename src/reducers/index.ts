import { combineReducers } from "redux";
import todoReducer from './todos'

const rootReducers = combineReducers({
  todoReducer
});

export type rootState = ReturnType<typeof rootReducers>;

export default rootReducers;