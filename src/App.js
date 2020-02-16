import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCanvasPosition } from "./utils/formulas";
import Canvas from "./components/Canvas";
import {
  GAME_LOOP_INTERVAL,
  movementKeys,
  movementSpeed
} from "./utils/constants";

class App extends Component {
  componentDidMount() {
    const self = this;

    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition);
    }, GAME_LOOP_INTERVAL);

    window.onresize = () => {
      const cnv = document.getElementById("maze-game-canvas");
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();

    this.movement();
  }

  movement() {
    window.addEventListener("keydown", event => {
      if (
        event.keyCode === movementKeys.RIGHT_ARROW ||
        event.keyCode === movementKeys.D
      ) {
        this.props.gameState.playerX =
          this.props.gameState.playerX + movementSpeed;
      } else if (
        event.keyCode === movementKeys.LEFT_ARROW ||
        event.keyCode === movementKeys.A
      ) {
        this.props.gameState.playerX =
          this.props.gameState.playerX - movementSpeed;
      } else if (
        event.keyCode === movementKeys.UP_ARROW ||
        event.keyCode === movementKeys.W
      ) {
        this.props.gameState.playerY =
          this.props.gameState.playerY - movementSpeed;
      } else if (
        event.keyCode === movementKeys.DOWN_ARROW ||
        event.keyCode === movementKeys.S
      ) {
        this.props.gameState.playerY =
          this.props.gameState.playerY + movementSpeed;
      }

      window.removeEventListener("keydown", event);
    });
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas
        mouseX={this.props.x}
        mouseY={this.props.y}
        playerX={this.props.gameState.playerX}
        playerY={this.props.gameState.playerY}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        trackMouse={event => this.trackMouse(event)}
      />
    );
  }
}

App.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    lives: PropTypes.number.isRequired,
    playerX: PropTypes.number.isRequired,
    playerY: PropTypes.number.isRequired
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired
};

export default App;
