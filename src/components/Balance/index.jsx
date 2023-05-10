import React from "react";
import { ContextAmoutConsumer } from "../../context/ContextAmout";

export default function Balance() {
  const { transactions } = ContextAmoutConsumer();
  const amount = transactions.map((transaction) => transaction.amount);

  const totalBalance = amount.reduce((acc, item) => (acc += parseInt(item)), 0);

  return (
    <div className="w-full bg-white">
      <h3 className="text-2xl mb-1 font-semibold text-[#4b3164]">Your Balance</h3>
      <span
        className={`${totalBalance > 0 ? "text-green-400" : "text-red-400"} text-3xl font-medium`}
      >
        ${totalBalance}
      </span>
    </div>
  );
}
