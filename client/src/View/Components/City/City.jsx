import React from "react";
import { NavLink } from "react-router-dom";
import "./City.style.css";

function City(props) {
  const { name, description } = props.city;
  let routName = name.replace(/\s+/g, "");
  routName = routName.toLowerCase();

  return (
    <div className="city">
      <h2 className="city-title">{name}</h2>
      <p className="city-description">{description}</p>
      <NavLink className="city-explore-button" to={`/${routName}`}>
        Explore &nbsp; &nbsp; &nbsp; &rarr;
      </NavLink>
    </div>
  );
}

export default City;
