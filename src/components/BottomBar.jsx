import React from "react";
import { bigWidth } from "../utils/constants";

const BottomBar = () => {
  const bottomBarStyle = {
    fill: "#CFB53B"
  };

  const division = {
    stroke: "3D3232",
    strokeWidth: "3px"
  };

  return (
    <g id="bottom">
      <rect
        id="bottom-2"
        data-name="bottom"
        style={bottomBarStyle}
        x={bigWidth / -2}
        y={0}
        width={bigWidth}
        height={100}
      />
      <line
        x1={bigWidth / -2}
        y1={0}
        x2={bigWidth / 2}
        y2={0}
        style={division}
      />
    </g>
  );
};

export default BottomBar;
