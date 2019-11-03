import { createSelector } from "reselect";
const getTodos = state => state.todoItems;
const getVisibilityFilter = state => state.visibilityFilter;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
);

export const getItemsLeft = createSelector(
  [getTodos],
  todos => {
    return todos.filter(t => !t.completed).length;
  }
);
