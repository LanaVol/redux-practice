import { createStore, combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";

//кореневий редюсер
const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

// другим параметром передано підключення інструментів розробника в браузері, встановивши додатковий пакет для браузеру можна відслудковувати стан компонентів в devtools browser redux
