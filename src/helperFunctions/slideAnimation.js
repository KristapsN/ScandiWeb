export const AnimateDirection = (slideDirection) => {
  let direction;
  if (slideDirection === "right") {
    direction = "animation--right";
  } else if (slideDirection === "left") {
    direction = "animation--left";
  }
  return direction;
};
