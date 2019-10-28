import * as types from "./actionTypes";

export function saveTodoItem(item) {
  return { type: types.SAVE_TODO_ITEM, todoItem: item };
}

export function deleteTodoItem() {
  return { type: types.DELETE_TODO_ITEM };
}
