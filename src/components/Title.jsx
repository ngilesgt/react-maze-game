import React from "react";
import { gameWidth } from "../utils/constants";

const Title = () => {
  const textStyle = {
    textAnchor: "middle", // center
    fontFamily: "Play",
    fontSize: 100,
    fill: "#CFB53B",
    x: 0, // center relative to X axis
    y: -1000, // top of the screen
    width: gameWidth
  };

  return (
    <g filter="url(#shadow)">
      <text {...textStyle}>Amazing</text>
      <text {...textStyle} y={-900}>
        Maze Game
      </text>
    </g>
  );
};

export default Title;
