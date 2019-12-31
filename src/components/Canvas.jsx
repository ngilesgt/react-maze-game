import React from "react";
import PropTypes from "prop-types";
import Background from "./Background";
import BottomBar from "./BottomBar";
import CurrentScore from "./CurrentScore";
import StartGame from "./StartGame";
import Title from "./Title";
import Circle from "./Circle";
import Box from "./Box";

const Canvas = props => {
  const gameHeight = 1200;
  const viewBox = [
    window.innerWidth / -2,
    100 - gameHeight,
    window.innerWidth,
    gameHeight
  ];

  return (
    <svg
      id="maze-game-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>

      <Background />
      <BottomBar />

      <CurrentScore score={0} />

      {!props.gameState.started && (
        <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      )}

      {props.gameState.started && (
        <g>
          <Box />
          <Circle x={props.x} y={props.y} />
        </g>
      )}
    </svg>
  );
};

Canvas.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

export default Canvas;
