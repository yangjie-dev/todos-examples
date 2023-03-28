import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./TodoApp";
import { Provider } from "react-redux";
import store from "./app/store";
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
