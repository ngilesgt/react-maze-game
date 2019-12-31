import React from "react";
import PropTypes from "prop-types";

const Circle = props => {
  const style = {
    fill: "#ffffff",
    stroke: "#665",
    strokeWidth: "2px",
    cursor: "none"
  };

  return (
    <g>
      <circle cx={props.xPos} cy={props.yPos} r={25} style={style} />
    </g>
  );
};

Circle.propTypes = {
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired
};

export default Circle;
