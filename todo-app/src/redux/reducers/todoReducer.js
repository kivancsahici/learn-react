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
    case types.CLEAR_COMPLETED:
      var newArrays = state.filter(function(value, index, arr) {
        return value.completed === false;
      });
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
