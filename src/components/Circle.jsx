import React from "react";
import PropTypes from "prop-types";

const Circle = props => {
  const style = {
    fill: "#ffffff",
    stroke: "#666",
    strokeWidth: "2px",
    cursor: "none"
  };

  return (
    <g>
      <circle cx={props.x} cy={props.y} r={25} style={style} />
    </g>
  );
};

Circle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Circle;
