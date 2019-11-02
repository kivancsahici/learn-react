import * as types from "./actionTypes";

export function saveTodoItem(item) {
  return { type: types.SAVE_TODO_ITEM, todoItem: item };
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
}

export function toggleTodoItem(todoItemKey) {
  return { type: types.TOGGLE_TODO_ITEM, todoItemKey };
}

export function setVisibilityFilter(visibilityFilter) {
  return { type: types.SET_VISIBILITY_FILTER, visibilityFilter };
}
