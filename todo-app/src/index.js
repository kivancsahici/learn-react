import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as ReactRedux from "react-redux";
import configureStore from "./redux/configureStore";
const store = configureStore();
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
