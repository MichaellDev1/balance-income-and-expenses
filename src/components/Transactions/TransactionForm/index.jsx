import React, { useState } from "react";
import { ContextAmoutConsumer } from "../../../context/ContextAmout";

export default function TransactionForm() {
  const { addTransaction, transactions } = ContextAmoutConsumer();
  const [dataTransaction, setDataTransaction] = useState({
    description: "",
    amount: 0,
  });

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setDataTransaction({
      ...dataTransaction,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: transactions.length,
      description: dataTransaction.description,
      amount: +dataTransaction.amount,
    });
  };

  return (
    <div className="w-full mt-1">
      <form
        onSubmit={handleSubmit}
        className="flex items-start justify-start  flex-col"
      >
        <input
          type="text"
          name="description"
          className="font-normal text-neutral-500 text-base py-1 px-4 border rounded-xl mb-2"
          placeholder="Description.."
          onChange={(e) => handleChangeInput(e)}
        />
        <input
          type="number"
          step="0.1"
          placeholder="00.00"
          className="font-normal text-neutral-500 text-base py-1 px-4 border rounded-xl"
          name="amount"
          onChange={(e) => handleChangeInput(e)}
        />
        <button className="text-sm font-semibold py-2 px-5 bg-cyan-600 text-white mt-2 hover:bg-cyan-500 transition-[background-color] rounded-xl">Add Transactions</button>
      </form>
    </div>
  );
}
