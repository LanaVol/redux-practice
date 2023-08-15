import { createAction, createReducer } from "@reduxjs/toolkit";

// початковий (дефолтний) стан
const initialState = {
  count: 0,
  todos: ["покупки", "зустріч", "домашні справи"],
};

// створюємо константи з вже вбудованими actionCreator-ами, що повертають тип action-a
export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

// редюсер в який параметрами передаємо дефолтний стан і об'єкт, в якому вказуємо попередньо вказані константи із присвоєнням їм функцій для зміни state
export default createReducer(initialState, {
  [increment]: function (state) {
    state.count = state.count + 1;
  },
  [decrement]: function (state) {
    state.count = state.count - 1;
  },
});

console.log(decrement);
