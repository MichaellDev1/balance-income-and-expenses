import React from "react";
import useIcomeExpenses from "../hooks/useIcomeExpenses";

export default function IcomExpensesContent() {
  const { negativeNumber, positiveNumber } = useIcomeExpenses();
  return (
    <div className="bg-white mt-5 w-full">
      <h3 className="text-end mb-4 text-2xl font-medium text-gray-900">
        Income and Expense
      </h3>
      <div className="text-end">
        <h4 className="text-2xl font-medium text-gray-700">Income</h4>
        <span className="text-lg font-medium text-green-400">
          {positiveNumber}
        </span>
      </div>
      <div className="text-end mt-5">
        <h4 className="text-xl font-medium text-gray-700">Expense</h4>
        <span className="text-lg font-medium text-red-400">
          {negativeNumber}
        </span>
      </div>
    </div>
  );
}
