import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hellow" }],
};

export const todoSlice = createSlice({
  name: "todo", //this name will appear in chrome extension
  initialState: initialState,
  reducers: {
    // state stores current state and actions stores the data to be passed
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo); // updating state
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((each) => each.id !== action.payload);
      console.log(state.todos)
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
