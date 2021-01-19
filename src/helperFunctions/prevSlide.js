export const PrevSlide = (slideSwitch, contentLength) => {
  let direction = slideSwitch;
  if (direction === 0) {
    direction = contentLength;
  } else {
    direction;
  }
  return direction;
};
