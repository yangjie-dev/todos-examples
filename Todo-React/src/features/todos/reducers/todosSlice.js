import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const { id, text, isCompleted } = action.payload;
        state.push({ id, text, isCompleted });
      },
    },
    completeTodo: {
      reducer: (state, action) => {
        return state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        );
      },
    },
    updateTodo: {
      reducer: (state, action) => {
        state.map((todo) =>
          todo.id === action.id
            ? { ...todo, text: action.text, isCompleted: action.isCompleted }
            : todo
        );
      },
    },
    initTodos: {
      reducer: (state, action) => {
        return action.payload;
      },
    },
  },
});
export const { addTodo, completeTodo, initTodos, updateTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
