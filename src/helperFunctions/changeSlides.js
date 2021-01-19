import { Content } from "../data/content";

export const GoToSlide = (sliderInput, slideSwitch) => {
  let direction;
  direction = sliderInput;
  if (!direction || direction > Content.length) {
    direction = slideSwitch;
  } else {
    direction -= 1;
  }
  return direction;
};
