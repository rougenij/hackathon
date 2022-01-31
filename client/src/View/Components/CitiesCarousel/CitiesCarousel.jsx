import React from "react";
import CityCard from "../CityCard/CityCard";
import CarouselButton from "../CarouselButton/CarouselButton";
import "./CitiesCarousel.style.css";

function CitiesCarousel(props) {
  const cities = props.cities;
  console.log("CitiesCarousel", cities);
  return (
    <div className="cities-carousel">
      <div className="cities-carousel-cities">
        {cities.map((city, index) => (
          <CityCard index={index} key={city.name} city={city} />
        ))}
      </div>
      <div className="carousel-buttons-container">
        <CarouselButton
          direction="left"
          handleCityChange={props.handleCityChange}
        />
        <CarouselButton
          direction="right"
          handleCityChange={props.handleCityChange}
        />
      </div>
    </div>
  );
}

export default CitiesCarousel;
