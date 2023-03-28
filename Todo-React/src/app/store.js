import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/reducers/todosSlice'

export default configureStore({
  reducer: {
    todos: todosReducer
  },
})