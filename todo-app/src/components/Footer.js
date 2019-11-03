import React, { useState } from "react";
import { connect } from "react-redux";
import * as todoActions from "../redux/actions/todoActions";
import { getItemsLeft } from "../redux/selectors";

const mapDispatchToProps = {
  setVisibilityFilter: todoActions.setVisibilityFilter,
  clearCompleted: todoActions.clearCompleted
};

const mapStateToProps = state => ({
  todoItems: state.todoItems,
  itemsLeft: getItemsLeft(state)
});

const Footer = ({
  todoItems,
  itemsLeft,
  setVisibilityFilter,
  clearCompleted,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) => {
  const [buttonStatus, setActive] = useState([true, false, false]);
  return (
    <div className="footer">
      <span className="itemsLeft">{itemsLeft} items left</span>
      <div className="filters">
        <span
          className={`${buttonStatus[0] === true ? "active" : ""}`}
          onClick={() => {
            setVisibilityFilter("SHOW_ALL");
            setActive([true, false, false]);
          }}
        >
          All
        </span>
        <span
          className={`${buttonStatus[1] === true ? "active" : ""}`}
          onClick={() => {
            setVisibilityFilter("SHOW_ACTIVE");
            setActive([false, true, false]);
          }}
        >
          Active
        </span>
        <span
          className={`${buttonStatus[2] === true ? "active" : ""}`}
          onClick={() => {
            setVisibilityFilter("SHOW_COMPLETED");
            setActive([false, false, true]);
          }}
        >
          Completed
        </span>
      </div>
      <span className="clearCompleted" onClick={clearCompleted}>
        Clear Completed
      </span>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
