export const SwipeDirection = (startPosition, swipeDirection) => {
  let direction;
  if (swipeDirection !== 0) {
    direction = startPosition - swipeDirection;
  }

  return direction;
};
