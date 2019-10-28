import React from "react";
import logo from "../logo.svg";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import * as todoActions from "../redux/actions/todoActions";
import { statement } from "@babel/template";

const mapDispatchToProps = {
  deleteTodoItem: todoActions.deleteTodoItem
};

function mapStatetoProps(state) {
  return {
    disabled: state.todoItems.length == 0 ? true : false
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
      </header>
    </div>
  );
}

//export default App;

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
