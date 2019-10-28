import * as actions from "../actions/todoActions";
import * as types from "../actions/ActionTypes";
import reducer from "../reducers/todoReducer";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([
      { key: 0, value: "my first task" }
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
        key: 0,
        value: "Run the tests"
      }
    ]);

    expect(
      reducer(
        [
          {
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
        key: 0,
        value: "Use Redux"
      },
      {
        key: 1,
        value: "Run the tests"
      }
    ]);
  });

  it("should handle DELETE_TODO_ITEM", () => {
    expect(
      reducer(
        [
          {
            key: 0,
            value: "Use Redux"
          }
        ],
        {
          type: types.DELETE_TODO_ITEM
        }
      )
    ).toEqual([]);
  });
});
