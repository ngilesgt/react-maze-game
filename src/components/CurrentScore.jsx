import React from "react";
import PropTypes from "prop-types";

const CurrentScore = props => {
  const scoreStyle = {
    fontFamily: "Play",
    fontSize: 80,
    fill: "#111010"
  };

  return (
    <g>
      <text style={scoreStyle} x="300" y="80">
        Score: {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired
};

export default CurrentScore;
