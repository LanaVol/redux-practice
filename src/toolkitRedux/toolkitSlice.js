import { createSlice } from "@reduxjs/toolkit";

//  створюємо Slice reducer і передаємо параметри як об'єкт (ім'я, початоквий стан і action-и)
const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ["покупки", "зустріч", "домашні справи"],
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeLastTodo(state) {
      state.todos.pop();
    },
  },
});
export default toolkitSlice.reducer;
export const { increment, decrement, addTodo, removeLastTodo } =
  toolkitSlice.actions;
