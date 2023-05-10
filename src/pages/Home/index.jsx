import React from "react";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import TransactionForm from "../../components/Transactions/TransactionForm/index";
import TransactionList from "../../components/Transactions/TransactionList";
import IcomeExpenses from "../../components/IcomExpenses";
import GraphicAmount from "../../components/GraphicAmount";
import IcomExpensesContent from "../../components/IcomExpensesContent";

export default function Home() {
  return (
    <main className="flex justify-center items-center py-10 min-h-[100vh]">
      <div className="flex md:flex-row w-full max-w-[80%] flex-col min-h-[550px]">
        <div className="flex-1 flex flex-col">
          <div
            className="bg-white w-full md:h-[50%] min-h-[200px] mb-2 rounded-2xl p-10 flex flex-col justify-center items-center"
            style={{ boxShadow: "0 0 20px rgba(0 0 0 / 5%)" }}
          >
            <Balance />
            <TransactionForm />
          </div>
          <div
            className="bg-white w-full overflow-y-scroll md:h-[50%] max-h-[320px] min-h-[200px] rounded-2xl p-10 flex flex-col justify-center"
            style={{ boxShadow: "0 0 20px rgba(0 0 0 / 5%)" }}
          >
            <TransactionList />
          </div>
        </div>
        <div className="flex-1 md:ml-2 flex flex-col">
          <div
            className="bg-white w-full md:h-[50%] min-h-[200px] mb-2 rounded-2xl p-10 flex flex-col justify-center items-center"
            style={{ boxShadow: "0 0 20px rgba(0 0 0 / 5%)" }}
          >
            <IcomeExpenses />
          </div>
          <div
            className="bg-white w-full md:h-[50%]  min-h-[200px] rounded-2xl p-10 flex flex-col justify-center items-center"
            style={{ boxShadow: "0 0 20px rgba(0 0 0 / 5%)" }}
          >
            <IcomExpensesContent />
          </div>
        </div>
      </div>
    </main>
  );
}
