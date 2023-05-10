import React from "react";
import { VictoryPie, VictoryLabel } from "victory";

export default function GraphicAmount({ negativeNumber, positiveNumber }) {
  const data = [
    { x: "Ingresos", y: positiveNumber },
    { x: "Egresos", y: negativeNumber  ? negativeNumber : 1 },
  ];
  return (
    <div>
      <VictoryPie
        colorScale={["#3FED8D", "#FF3633"]}
        data={data}
        animate={{
          duration: 200,
        }}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "while" }} />}
      />
    </div>
  );
}
