import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import * as todoActions from "../redux/actions/todoActions";

const mapDispatchToProps = {
  deleteTodoItem: todoActions.deleteTodoItem
};

function mapStatetoProps(state) {
  return {
    disabled: state.todoItems.length === 0 ? true : false
  };
}

function App({ disabled, deleteTodoItem }) {
  const onDelete = () => {
    deleteTodoItem();
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onDelete} disabled={disabled}>
          Delete
        </button>
        <TodoForm />
        <TodoList />
        <div className="footer">
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </div>
      </header>
    </div>
  );
}

//export default App;

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
