import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoapp",
  initialState: {
    todos: [],
    inProgressTask: [],
    inReviewTask: [],
    doneTask: [],
    searchInputValue: "",
  },
  reducers: {
    addTodoTask: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    removeTodoTask: (state, action) => {
      const { id, colums } = action.payload;
      const index = state[colums].findIndex((todo) => todo.id === id);
      state[colums].splice(index, 1);
    },
    completedTodoTask: (state, action) => {
      const { id, completed, colums } = action.payload;
      const index = state[colums].findIndex((todo) => todo.id === id);
      state[colums][index].completed = !completed;
    },
    editingTodoTask: (state, action) => {
      const { value, task } = action.payload;
      const { colums } = task;
      const index = state[colums].findIndex((todo) => todo.id === task.id);
      state[colums][index].text = value;
    },
    filterSearchValue: (state, action) => {
      state.searchInputValue = action.payload;
    },
    todoDrag: (state, action) => {
      const result = action.payload;
      if (!result.destination) return;
      const { source, destination } = result;
      if (source.droppableId !== destination.droppableId) {
        let sourceColumn = state[source.droppableId];
        let destColumn = state[destination.droppableId];
        const sourceItems = [...sourceColumn];
        const destItems = [...destColumn];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        state[source.droppableId] = sourceItems;
        state[destination.droppableId] = destItems;
        state[destination.droppableId][0].colums = destination.droppableId;
      } else {
        const column = state[source.droppableId];
        const copiedItems = [...column];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        state[source.droppableId] = copiedItems;
      }
    },
  },
});

export const {
  addTodoTask,
  removeTodoTask,
  completedTodoTask,
  editingTodoTask,
  filterSearchValue,
  todoDrag,
} = todoSlice.actions;

export default todoSlice.reducer;
