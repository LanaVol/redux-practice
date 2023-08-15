import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import mainReducer from "./mainReducers";

// кореневий редюсер
const rootReducer = combineReducers({
  main: mainReducer,
});

// створюємо store і передаємо в параметри кореневий редюсер і інструменти розробника
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
