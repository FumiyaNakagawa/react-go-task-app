import { combineReducers } from "redux";
import todoReducer from './todos'

const rootReducers = combineReducers({
  todoReducer
});

export default rootReducers;