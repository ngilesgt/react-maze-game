import React from "react";
import { bigWidth } from "../utils/constants";

const TransparentLayer = () => {
  const transparentStyle = {
    fill: "transparent"
  };

  const gameHeight = 1200;

  return (
    <rect
      style={transparentStyle}
      x={bigWidth / -2}
      y={100 - gameHeight}
      width={bigWidth}
      height={gameHeight}
    />
  );
};

export default TransparentLayer;
