export const pathFromBezierCurve = cubicBezierCurve => {
  const {
    initialAxis,
    initialControlPoint,
    endingControlPoint,
    endingAxis
  } = cubicBezierCurve;
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};

export const radiansToDegrees = radians => (radians * 180) / Math.PI;

export const getCanvasPosition = event => {
  // mouse position on auto-scaling canvas
  // https://stackoverflow.com/a/10298843/1232793

  const svg = document.getElementById("maze-game-canvas");
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return { x, y };
};

export const checkCollision = (rectA, rectB) =>
  rectA.x1 < rectB.x2 &&
  rectA.x2 > rectB.x1 &&
  rectA.y1 < rectB.y2 &&
  rectA.y2 > rectB.y1;

// put this in its own file if i want to use it - TODO
export const registerListener = (eventName, handler) => {
  window.addEventListener(eventName, handler);
  return () => window.removeEventListener(eventName, handler);
};
