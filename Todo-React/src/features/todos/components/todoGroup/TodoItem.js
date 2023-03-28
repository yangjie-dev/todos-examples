import React from "react";
import "./TodoItem.css";
import { completeTodo } from "../../reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoApi } from "../../../../apis/todos";

export function TodoItem(props) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => {
    return state.todos.find((todo) => {
      return todo.id === props.item.id;
    });
  });

  const handleComplele = () => {

    const requestTodo = { ...todo, isCompleted: !todo.isCompleted };

    updateTodoApi(todo.id, requestTodo).then((response) => {
      dispatch(completeTodo(todo.id));
    });
  };

  return (
    <div className="todo-item">
      <p className={"todo-item__content__" + props.item.isCompleted}>
        {props.item.text}
      </p>
      <button className="todo-item__button" onClick={handleComplele.bind(this)}>
        {props.item.isCompleted ? "Undo" : "complete"}
      </button>
    </div>
  );
}
