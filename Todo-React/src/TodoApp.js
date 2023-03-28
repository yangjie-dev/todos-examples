import React from "react";
import { Route, Routes } from "react-router";
import { TodoList } from "./features/todos/components/todoList/TodoList";
import { BrowserRouter, Link } from "react-router-dom";
import HelpPage from "./features/todos/components/help/HelpPage";
import "./TodoApp.css";
import TodoDone from "./features/todos/components/todoDone/TodoDone";

export default function TodoApp() {
  return (
    <div>
      <BrowserRouter>
        <Link className = "link" to='/'> Home </Link>
        <Link className = "link" to='/help'> Help </Link>
        <Link className = "link" to='/done'> Done </Link>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/done" element={<TodoDone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
