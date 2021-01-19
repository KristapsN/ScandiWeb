export const NextSlide = (slideSwitch, contentLength) => {
  let direction = slideSwitch;
  if (direction + 1 === contentLength) {
    direction = 0;
  } else {
    direction += 1;
  }
  return direction;
};
