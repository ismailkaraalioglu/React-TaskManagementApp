import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoapp",
  initialState: {
    todos: [],
    inProgressTask: [],
    inReviewTask: [],
    doneTask: [],
    searchInputValue: "",
    getColumsId: "todos",
  },
  reducers: {
    addTodoTask: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    removeTodoTask: (state, action) => {
      const { id, getColumsId } = action.payload;
      const index = state[getColumsId].findIndex((todo) => todo.id === id);
      state[getColumsId].splice(index, 1);
    },
    completedTodoTask: (state, action) => {
      console.log(action.payload);
      const { task, getColumsId } = action.payload;
      const { id, completed } = task;
      const index = state[getColumsId].findIndex((todo) => todo.id === id);
      state[getColumsId][index].completed = !completed;
    },
    editingTodoTask: (state, action) => {
      const { value, task, getColumsId } = action.payload;
      const index = state[getColumsId].findIndex((todo) => todo.id === task.id);
      state[getColumsId][index].text = value;
    },
    filterSearchValue: (state, action) => {
      state.searchInputValue = action.payload;
    },
    todoDrag: (state, action) => {
      const result = action.payload;
      if (!result.destination) return;
      const { source, destination } = result;
      if (source.droppableId !== destination.droppableId) {
        state.getColumsId = destination.droppableId;
        let sourceColumn = state[source.droppableId];
        let destColumn = state[destination.droppableId];
        const sourceItems = [...sourceColumn];
        const destItems = [...destColumn];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        state[source.droppableId] = sourceItems;
        state[destination.droppableId] = destItems;
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
