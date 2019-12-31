import React from "react";

const Box = () => {
  const boxStyle = {
    stroke: "white",
    strokeWidth: "5",
    fill: "transparent",
    cursor: "none"
  };

  return <rect style={boxStyle} x={-250} y={-800} width={500} height={500} />;
};

export default Box;
