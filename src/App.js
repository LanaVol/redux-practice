import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "2rem" }}>{cash}</div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => addCash(Number(prompt()))}>
          Поповнити рахунок
        </button>
        <button onClick={() => getCash(Number(prompt()))}>Зняти кошти</button>
        <button onClick={() => addCustomer(prompt())}>Додати клієнта</button>
        <button
          onClick={() => {
            dispatch(fetchCustomers());
          }}
        >
          Отримати клієнтів із бази
        </button>
      </div>
      {customers.length > 0 ? (
        <div
          style={{
            paddingTop: "10px",
          }}
        >
          {customers.map((customer) => (
            <div
              key={customer.id}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
              }}
              onClick={() => removeCustomer(customer)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem" }}>Клієнти відсутні</div>
      )}
    </div>
  );
}

export default App;
