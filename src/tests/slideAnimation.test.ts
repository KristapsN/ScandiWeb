import { AnimateDirection } from "../helperFunctions/slideAnimation";

describe("Set animation direction", () => {
  it("Should show right direction", () => {
    const summerize = AnimateDirection("right");
    expect(summerize).toEqual("animation--right");
  });
  it("Should show left direction", () => {
    const summerize = AnimateDirection("left");
    expect(summerize).toEqual("animation--left");
  });
});
