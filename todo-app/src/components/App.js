import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import * as todoActions from "../redux/actions/todoActions";
//import { getVisibleTodos } from "../redux/selectors";

const mapDispatchToProps = {
  deleteTodoItem: todoActions.deleteTodoItem,
  setVisibilityFilter: todoActions.setVisibilityFilter
};
/*
function mapStatetoProps(state) {
  return {
    disabled: state.todoItems.length === 0 ? true : false,
    todos: getVisibleTodos(state)
  };
}*/

function App({ deleteTodoItem, setVisibilityFilter }) {
  const onDelete = () => {
    deleteTodoItem();
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onDelete}>Delete</button>
        <TodoForm />
        <TodoList />
        <div className="footer">
          <span onClick={() => setVisibilityFilter("SHOW_ALL")}>All</span>
          <span onClick={() => setVisibilityFilter("SHOW_ACTIVE")}>Active</span>
          <span onClick={() => setVisibilityFilter("SHOW_COMPLETED")}>
            Completed
          </span>
        </div>
      </header>
    </div>
  );
}

//export default App;

export default connect(
  null,
  mapDispatchToProps
)(App);
