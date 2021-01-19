import { GoToSlide } from "../helperFunctions/changeSlides";

describe("Set which slide opens", () => {
  it("Should open slide nr 1", () => {
    const summerize = GoToSlide(2, 5);
    expect(summerize).toEqual(1);
  });
  it("Should open slide nr 5", () => {
    const summerize = GoToSlide(7, 4);
    expect(summerize).toEqual(4);
  });
  it("Should open slide nr 1", () => {
    const summerize = GoToSlide(NaN, 1);
    expect(summerize).toEqual(1);
  });
});
