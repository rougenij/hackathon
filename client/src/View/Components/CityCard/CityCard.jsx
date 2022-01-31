import React from "react";
import "./CityCard.style.css";

function CityCard(props) {
  const { name, pic2 } = props.city;
  console.log("pic2", pic2);
  return (
    <div className="city-card">
      <figure>
        <figcaption className="city-card-name">{name}</figcaption>
        <img className="city-card-image" src={pic2} alt={name} />
      </figure>
    </div>
  );
}

export default CityCard;
