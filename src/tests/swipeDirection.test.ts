import { SwipeDirection } from "../helperFunctions/swipeDirection";

describe("Set swipe walue", () => {
  it("Should show negative value", () => {
    const summerize = SwipeDirection(0, 5);
    expect(summerize).toEqual(-5);
  });
  it("Should show positive value", () => {
    const summerize = SwipeDirection(8, 5);
    expect(summerize).toEqual(3);
  });
});
