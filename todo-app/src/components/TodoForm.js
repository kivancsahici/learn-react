import React, { useState } from "react";
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

const TodoForm = ({
  todoItems,
  saveTodoItem,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    saveTodoItem(inputValue);
    setInputValue("");
  };

  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={inputValue}
        type="text"
        placeholder="A new value"
        onChange={onChange}
      ></input>
    </form>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
