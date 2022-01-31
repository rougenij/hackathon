import React from "react";
import "./CityCard.style.css";

function CityCard(props) {
  const { name, pic2 } = props.city;
  console.log("pic2", pic2);
  return (
    <div className="city-card">
      <figure>
        <figcaption className="city-card-name">{name}</figcaption>
        <img
          className={`city-card-image ${
            props.index === 0 ? "selected-card" : ""
          }`}
          src={pic2}
          alt={name}
        />
      </figure>
    </div>
  );
}

export default CityCard;
