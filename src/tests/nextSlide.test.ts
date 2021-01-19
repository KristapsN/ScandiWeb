import { NextSlide } from "../helperFunctions/nextSlide";

describe("Check if next slide opens", () => {
  it("Should open slide nr 0", () => {
    const summerize = NextSlide(4, 5);
    expect(summerize).toEqual(0);
  });
  it("Should open slide nr 3", () => {
    const summerize = NextSlide(2, 5);
    expect(summerize).toEqual(3);
  });
});
