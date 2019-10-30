import { combineReducers } from "redux";
//import todoReducer from "./todoReducer";
import todoItems from "./todoReducer";

import visibilityFilter from "./visibilityReducer";
const rootReducer = combineReducers({
  todoItems,
  visibilityFilter
});

export default rootReducer;
