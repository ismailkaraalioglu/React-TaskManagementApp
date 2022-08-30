import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoapp",
  initialState: {
    todos: [],
    searchInputValue: "",
  },
  reducers: {
    addTodoTask: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    removeTodoTask: (state, action) => {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(index, 1);
    },
    completedTodoTask: (state, action) => {
      const { id, completed } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index].completed = !completed;
    },
    editingTodoTask: (state, action) => {
      const { value, task } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === task.id);
      state.todos[index].text = value;
    },
    filterSearchValue: (state, action) => {
      state.searchInputValue = action.payload;
    },
  },
});

export const {
  addTodoTask,
  removeTodoTask,
  completedTodoTask,
  editingTodoTask,
  filterSearchValue,
} = todoSlice.actions;

export default todoSlice.reducer;
