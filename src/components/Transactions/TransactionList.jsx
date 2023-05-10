import React from "react";
import { ContextAmoutConsumer } from "../../context/ContextAmout";
import DleeteIcon from "../Icons";

export default function TransactionList() {
  const { transactions, deleteTransaction, deleteAll } = ContextAmoutConsumer();

  const handleDeleteTransaction = (id) => {
    deleteTransaction(id);
  };

  return (
    <div className="pr-5 bg-white rounded-xl min-h-[190px]">
      <h3 className="text-start mb-4 text-2xl font-medium text-gray-900">
        Income and Expense
      </h3>
      {transactions.length > 0 ? (
        <div className="w-full text-end mb-3">
          <button className="text-xs bg-amber-300 py-1 px-3 rounded-md text-white font-semibold" onClick={() => deleteAll()}>Delete all</button>
        </div>
      ) : null}
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between mb-5"
        >
          <div>
            <p className="text-base font-normal text-neutral-600">
              {transaction.description}
            </p>
            <span
              className={`${
                transaction.amount > 0 ? "text-green-400" : "text-red-400"
              } text-xl font-medium`}
            >
              ${transaction.amount}
            </span>
          </div>
          <div>
            <button onClick={() => handleDeleteTransaction(transaction.id)}>
              <DleeteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
