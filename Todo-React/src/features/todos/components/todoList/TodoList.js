import { React, useEffect } from "react";
import TodoGroup from "../todoGroup/TodoGroup";
import TodoHeader from "../todoHeader/TodoHeader";
import TodoGenerator from "../todoGenerator/TodoGenerator";
import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css";
import { initTodos } from "../../reducers/todosSlice";
import { getTodosApi } from "../../../../apis/todos";

export function TodoList() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    getTodosApi().then((response) => dispatch(initTodos(response.data)));
  }, []);

  return (
    <div>
      <TodoHeader />
      <div className="todo-list">
        <h1> TodoList</h1>
        <TodoGroup todos={todos} />
        <TodoGenerator />
      </div>
    </div>
  );
}
