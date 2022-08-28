import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoapp",
  initialState: {
    todos: [],
  },
  reducers: {},
});

export default todoSlice.reducer;
