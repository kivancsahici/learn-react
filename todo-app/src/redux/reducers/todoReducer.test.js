import * as types from "../actions/ActionTypes";
import reducer from "../reducers/todoReducer";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([
      { completed: true, key: 0, value: "my first task" }
    ]);
  });

  it("should handle SAVE_TODO_ITEM", () => {
    expect(
      reducer([], {
        type: types.SAVE_TODO_ITEM,
        todoItem: "Run the tests"
      })
    ).toEqual([
      {
        completed: false,
        key: 0,
        value: "Run the tests"
      }
    ]);

    expect(
      reducer(
        [
          {
            completed: false,
            key: 0,
            value: "Use Redux"
          }
        ],
        {
          type: types.SAVE_TODO_ITEM,
          todoItem: "Run the tests"
        }
      )
    ).toEqual([
      {
        completed: false,
        key: 0,
        value: "Use Redux"
      },
      {
        completed: false,
        key: 1,
        value: "Run the tests"
      }
    ]);
  });

  it("should handle CLEAR_COMPLETED", () => {
    expect(
      reducer(
        [
          {
            completed: true,
            key: 0,
            value: "Use Redux"
          },
          {
            completed: false,
            key: 1,
            value: "Use Selectors"
          }
        ],
        {
          type: types.CLEAR_COMPLETED
        }
      )
    ).toEqual([
      {
        completed: false,
        key: 1,
        value: "Use Selectors"
      }
    ]);
  });
});
