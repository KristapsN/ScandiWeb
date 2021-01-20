import React from "react";
import "./slider.scss";

type Props = {
  slideChangeHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  slideInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: number;
  totalSlides: number;
};

export const ChoseSlide = ({
  slideChangeHandler,
  slideInputHandler,
  inputValue,
  totalSlides,
}: Props) => {
  return (
    <div className="sliderButtonWrapper">
      <form onSubmit={slideChangeHandler}>
        <label htmlFor="number">
          Slide:
          <input
            className="input--slides"
            type="number"
            value={inputValue}
            onChange={(e) => slideInputHandler(e)}
          />
        </label>
        <button className="button--submit" type="submit">Change</button>
      </form>
      <span> of {totalSlides}</span>
    </div>
  );
};
