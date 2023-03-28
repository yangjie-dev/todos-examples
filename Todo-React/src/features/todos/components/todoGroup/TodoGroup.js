import React from "react";
import "./TodoGroup.css";
import { TodoItem } from "./TodoItem";

export function TodoGroup(props) {
  const todos = props.todos;

  return (
    <div className="todo-group">
      <h2> TodoGroup </h2>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item}></TodoItem>
      ))}
    </div>
  );
}

export default TodoGroup;
