import React from "react";
import { connect } from "react-redux";
import * as todoActions from "../redux/actions/todoActions";

const mapDispatchToProps = {
  toggleTodoItem: todoActions.toggleTodoItem
};

function mapStateToProps(state) {
  return {
    todoItems: state.todoItems
  };
}

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(function({
  todoItems,
  toggleTodoItem,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) {
  const handleClick = e => {
    toggleTodoItem(e.currentTarget.value);
  };
  return (
    <div className="todoList">
      <ul>
        {todoItems.map(item => (
          <li
            key={item.key}
            value={item.key}
            onClick={handleClick}
            className={item.completed === true ? "completed" : "active"}
          >
            <input type="checkbox"></input>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
