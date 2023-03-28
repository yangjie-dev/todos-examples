import React, { useState } from "react";
import "./TodoGenerator.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../reducers/todosSlice";
import { addTodoApi } from "../../../../apis/todos";
import { Form, Input, Button } from "antd";

function TodoGenerator() {
  const [text, setText] = useState("");

  const todoList = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.length === 0) {
      return;
    }

    addTodoApi(text).then((response) => {
      dispatch(addTodo(response.data));
    });
    
    setText("");
  };

  return (
    <div className="todo-form">
      <Form onFinish={handleSubmit} className="todo-form__content">
        <Form.Item>
          <Input required type="text" onChange={handleChange} value={text} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="todo-form__content__button"
          >
            Add Todo #{todoList.length + 1}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TodoGenerator;
