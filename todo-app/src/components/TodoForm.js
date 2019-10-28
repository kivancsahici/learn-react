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

class _TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // Note: we're accessing "current" to get the DOM node
    e.preventDefault();
    this.props.saveTodoItem(this.state.value);
    this.setState({ value: "" });
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          type="text"
          placeholder="A new value"
          onChange={this.onChange}
        ></input>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

//export default TodoForm;
