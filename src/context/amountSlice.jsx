export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "DELETE_ALL_TRANSACTION":
      localStorage.removeItem("transactions");
      return {
        ...state,
        transactions: [],
      };
    default:
      return state;
  }
};
