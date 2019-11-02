import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <TodoList />
        <Footer />
      </header>
    </div>
  );
}

export default App;
