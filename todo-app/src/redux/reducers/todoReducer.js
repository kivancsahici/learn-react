import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function todoReducer(state = initialState.todoItems, action) {
  switch (action.type) {
    case types.SAVE_TODO_ITEM:
      let newArray = state.slice();
      newArray.push(action.todoItem);
      return newArray;

    default:
      return state;
  }
}
