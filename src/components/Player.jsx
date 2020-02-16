import React from "react";
import PropTypes from "prop-types";

const Player = props => {
  const style = {
    fill: "#FF5733",
    stroke: "#ffffff",
    strokeWidth: "2px",
    cursor: "none"
  };

  return (
    <g>
      <rect
        x={props.playerX}
        y={props.playerY}
        width="15"
        height="15"
        style={style}
      />
    </g>
  );
};

Player.propTypes = {
  playerX: PropTypes.number.isRequired,
  playerY: PropTypes.number.isRequired
};

export default Player;
