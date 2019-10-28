import * as actions from "../actions/todoActions";
import * as types from "../actions/ActionTypes";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const todoItemText = "Finish docs";
    const expectedAction = {
      type: types.SAVE_TODO_ITEM,
      todoItem: todoItemText
    };
    expect(actions.saveTodoItem(todoItemText)).toEqual(expectedAction);
  });

  it("should create an action to remove a todo", () => {
    const expectedAction = { type: types.DELETE_TODO_ITEM };
    expect(actions.deleteTodoItem()).toEqual(expectedAction);
  });
});
