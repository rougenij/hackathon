import React from "react";
import "./CarouselButton.style.css";

function CarouselButton(props) {
  if (props.direction === "left")
    return (
      <div
        onClick={() => props.handleCityChange(-1)}
        className={`carousel-button ${props.direction}`}
      >
        &lsaquo;
      </div>
    );
  return (
    <div
      onClick={() => props.handleCityChange(1)}
      className={`carousel-button ${props.direction}`}
    >
      &rsaquo;
    </div>
  );
}

export default CarouselButton;
