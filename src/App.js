import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./toolkitRedux/toolkitReducer";
// import {
//   increment,
//   decrement,
//   removeLastTodo,
//   addTodo,
// } from "./vanilaRedux/mainReducers";
// ************************************PART ONE OF REDUX PRACTISE
// import {
//   addCustomerAction,
//   removeCustomerAction,
// } from "./store/customerReducer";
// import { fetchCustomers } from "./asyncActions/customers";
// ************************************PART ONE OF REDUX PRACTISE

function App() {
  const count = useSelector((state) => state.toolkit.count);
  // const count = useSelector((state) => state.main.count);
  // const todos = useSelector((state) => state.main.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Лічильник: {count}</h1>
      <button onClick={() => dispatch(increment())}>Інкремент</button>
      <button onClick={() => dispatch(decrement())}>Декремент</button>
      {/* <button onClick={() => dispatch(removeLastTodo())}>
        Видалити останній туду
      </button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Додати туду</button> */}
      <ul>
        {/* {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))} */}
      </ul>
    </div>
  );
}

// ************************************PART ONE OF REDUX PRACTISE
// function App() {
//   const dispatch = useDispatch();
//   const cash = useSelector((state) => state.cash.cash);
//   const customers = useSelector((state) => state.customers.customers);

//   const addCash = (cash) => {
//     dispatch({ type: "ADD_CASH", payload: cash });
//   };
//   const getCash = (cash) => {
//     dispatch({ type: "GET_CASH", payload: cash });
//   };

//   const addCustomer = (name) => {
//     const customer = {
//       name,
//       id: Date.now(),
//     };
//     dispatch(addCustomerAction(customer));
//   };

//   const removeCustomer = (customer) => {
//     dispatch(removeCustomerAction(customer.id));
//   };

//   return (
//     <div className="App">
//       <div style={{ fontSize: "2rem" }}>{cash}</div>
//       <div
//         style={{
//           display: "flex",
//           gap: "0.5rem",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <button onClick={() => addCash(Number(prompt()))}>
//           Поповнити рахунок
//         </button>
//         <button onClick={() => getCash(Number(prompt()))}>Зняти кошти</button>
//         <button onClick={() => addCustomer(prompt())}>Додати клієнта</button>
//         <button
//           onClick={() => {
//             dispatch(fetchCustomers());
//           }}
//         >
//           Отримати клієнтів із бази
//         </button>
//       </div>
//       {customers.length > 0 ? (
//         <div
//           style={{
//             paddingTop: "10px",
//           }}
//         >
//           {customers.map((customer) => (
//             <div
//               key={customer.id}
//               style={{
//                 fontSize: "2rem",
//                 border: "1px solid black",
//                 padding: "10px",
//               }}
//               onClick={() => removeCustomer(customer)}
//             >
//               {customer.name}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div style={{ fontSize: "2rem" }}>Клієнти відсутні</div>
//       )}
//     </div>
//   );
// }
// ************************************PART ONE OF REDUX PRACTISE

export default App;
