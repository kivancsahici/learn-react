import * as types from "./actionTypes";

export function saveTodoItem(item) {
  return { type: types.SAVE_TODO_ITEM, todoItem: item };
}
