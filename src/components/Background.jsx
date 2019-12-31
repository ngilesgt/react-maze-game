import React from "react";
import { bigWidth } from "../utils/constants";

const Background = () => {
  const backgroundStyle = {
    fill: "#111010"
  };

  const gameHeight = 1200;

  return (
    <rect
      style={backgroundStyle}
      x={bigWidth / -2}
      y={100 - gameHeight}
      width={bigWidth}
      height={gameHeight}
    />
  );
};

export default Background;
