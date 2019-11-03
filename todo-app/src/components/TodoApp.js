import React from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

function TodoApp() {
  return (
    <>
      <TodoForm />
      <TodoList />
      <Footer />
    </>
  );
}

export default TodoApp;
