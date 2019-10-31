import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";
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
        <Footer />
      </header>
    </div>
  );
}

//export default App;

export default connect(
  null,
  mapDispatchToProps
)(App);
