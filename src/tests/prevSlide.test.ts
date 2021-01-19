import { PrevSlide } from "../helperFunctions/prevSlide";

describe("Check if previous slide opens", () => {
  it("Should open slide nr 5", () => {
    const summerize = PrevSlide(0, 5);
    expect(summerize).toEqual(5);
  });
  it("Should open slide nr 3", () => {
    const summerize = PrevSlide(3, 5);
    expect(summerize).toEqual(3);
  });
});
