import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function todoReducer(state = initialState.todoItems, action) {
  switch (action.type) {
    case types.SAVE_TODO_ITEM:
      let newArray = state.slice();
      newArray.push({
        value: action.todoItem,
        key: newArray.length,
        completed: false
      });
      return newArray;
    case types.DELETE_TODO_ITEM:
      let newArrays = state.slice();
      if (newArrays.length > 0) newArrays.pop();
      return newArrays;
    case types.TOGGLE_TODO_ITEM:
      let array = state.slice();
      let item = array.find(item => item.key == action.todoItemKey);
      item.completed === true
        ? (item.completed = false)
        : (item.completed = true);
      return array;
    default:
      return state;
  }
}
