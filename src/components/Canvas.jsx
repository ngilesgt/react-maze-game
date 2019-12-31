import React from "react";
import PropTypes from "prop-types";
import Background from "./Background";
import BottomBar from "./BottomBar";
import CurrentScore from "./CurrentScore";
import StartGame from "./StartGame";
import Title from "./Title";
import Circle from "./Circle";
import Box from "./Box";
import TransparentLayer from "./TransparentLayer";

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

      {!props.gameState.started && (
        <g>
          <TransparentLayer />
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      )}

      {props.gameState.started && (
        <g>
          <Box />
          <Circle xPos={props.mouseX} yPos={props.mouseY} />
        </g>
      )}

      <BottomBar />

      <CurrentScore score={0} />
    </svg>
  );
};

Canvas.propTypes = {
  mouseX: PropTypes.number.isRequired,
  mouseY: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    lives: PropTypes.number.isRequired
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

export default Canvas;
