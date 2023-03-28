import React from "react";
import TodoGroup from "../todoGroup/TodoGroup";
import { useSelector } from "react-redux";

function TodoDone() {
  const todos = useSelector((state) => state.todos.filter(todo => todo.isCompleted === true));

  return (
    <div>
      <h1>Done Todo</h1>
      <TodoGroup todos={todos} />
    </div>
  );
}

export default TodoDone;
