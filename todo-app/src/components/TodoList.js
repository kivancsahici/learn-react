import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    todoItems: state.todoItems
  };
}

const TodoList = connect(mapStateToProps)(function({
  todoItems,
  ...props /* assign any props I havent destructured on the left to a variable called props */
}) {
  return (
    <div className="todoList">
      <ul>
        {todoItems.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
