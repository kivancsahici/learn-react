import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function visibilityReducer(
  state = initialState.visibilityFilter,
  action
) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.visibilityFilter;
    default:
      return state;
  }
}
