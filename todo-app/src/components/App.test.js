import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as ReactRedux from "react-redux";
import configureStore from "../redux/configureStore";
const store = configureStore();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ReactRedux.Provider store={store}>
      <App />
    </ReactRedux.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
