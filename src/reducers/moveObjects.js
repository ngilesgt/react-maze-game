function moveObjects(state, action) {
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0
  };

  const { x, y } = mousePosition;

  return {
    ...state,
    gameState: {
      ...state.gameState,
      playerX: state.gameState.playerX,
      playerY: state.gameState.playerY
    },
    x,
    y
  };
}

export default moveObjects;
