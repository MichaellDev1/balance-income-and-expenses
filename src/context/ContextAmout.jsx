import React, { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./amountSlice";
const initialState = {
  transactions: [],
};

const Context = createContext({});
export default function ContextAmout({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transactions) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const deleteAll = () => {
    dispatch({
      type: "DELETE_ALL_TRANSACTION",
      payload: [],
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction: addTransaction,
        deleteAll: deleteAll,
        deleteTransaction: deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function ContextAmoutConsumer() {
  const data = useContext(Context);
  return data;
}
