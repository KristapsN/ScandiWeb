import React from "react";
import "./slider.scss";
import { SliderButton } from './arrowButton';

type Props = {
  title: string;
  paragraph: string;
  image: string | undefined;
  endHandler: (e: React.TouchEvent<HTMLDivElement>) => void;
  startHandler: (e: React.TouchEvent<HTMLDivElement>) => void;
  slideNextHandler: () => void;
  slidePrevHandler: () => void;
  swipeHandler: () => void;
  animation: string;
};

export const SliderContent = ({
  title,
  paragraph,
  image,
  swipeHandler,
  startHandler,
  endHandler,
  slideNextHandler,
  slidePrevHandler,
  animation,
}: Props) => {
  return (
    <div
      className="content"
      onTouchMove={(e) => endHandler(e)}
      onTouchStart={(e) => startHandler(e)}
      onTouchEnd={() => swipeHandler()}
    >
      <SliderButton
        slideNextPrevHandler={() =>slidePrevHandler()}
        iconName="fas fa-chevron-left"
        direction="button--left"
      />
       <SliderButton
        slideNextPrevHandler={() =>slideNextHandler()}
        iconName="fas fa-chevron-right"
        direction="button--right"
      />
      {image ? (
        <div className={`${"imageSlide "}` + `${animation}`}>
          <div className="imageWrapper">
            <img className="image" src={image} alt={title} />
          </div>
          <p className="paragraph">{paragraph}</p>
        </div>
      ) : (
        <div className={`${"textSlide "}` + `${animation}`}>
          <h1 className="title">{title}</h1>
          <p className="paragraph">{paragraph}</p>
        </div>
      )}
    </div>
  );
};
