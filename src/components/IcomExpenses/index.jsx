import React from "react";
import { ContextAmoutConsumer } from "../../context/ContextAmout";
import GraphicAmount from "../GraphicAmount";
import useIcomeExpenses from "../../hooks/useIcomeExpenses";

export default function IcomeExpenses() {
  const { negativeNumber, positiveNumber } = useIcomeExpenses();

  return (
    <div className="flex flex-col justify-end items-end">
      <div className="max-w-[270px] bg-white">
        <GraphicAmount
          negativeNumber={negativeNumber}
          positiveNumber={positiveNumber}
        />
      </div>
    </div>
  );
}
