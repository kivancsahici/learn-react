import React from "react";
import { connect } from "react-redux";

import * as storeActions from "../redux/actions/todoActions";

const mapDispatchToProps = {
  saveTodoItem: storeActions.saveTodoItem
};

function mapStateToProps(state) {
  return {
    item: state.item
  };
}

const TodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({
  item,
  saveTodoItem,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) {
  function _handleKeyDown(e) {
    if (e.key === "Enter") {
      saveTodoItem(e.target.value);
    }
  }
  return (
    <input
      type="text"
      placeholder="A new value"
      onKeyDown={_handleKeyDown}
    ></input>
  );
});

export default TodoForm;
