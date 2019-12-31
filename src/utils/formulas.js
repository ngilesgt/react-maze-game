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
