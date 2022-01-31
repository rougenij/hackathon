import React, { useEffect, useState } from "react";
import cultourApi from "../../../Api/cultourApi";
import City from "../../Components/City/City";
import CitiesCarousel from "../../Components/CitiesCarousel/CitiesCarousel";
import NavBar from "../../Components/NavBar/NavBar";
import logo from "../../assets/images/logo.png";
import "./HomePageCulTour.style.css";

function HomePageCulTour() {
  const [loading, setLoading] = useState(true);
  const [citiesArray, setCitiesArray] = useState([]);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await cultourApi.get("/cities");
        setCitiesArray(data);
        setCity(data[0]);
        setCities(data.slice(0, 3));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleCityChange = (changeValue) => {
    if (currentCityIndex + changeValue < 0) return;
    if (currentCityIndex + changeValue > citiesArray.length - 1) return;

    setCurrentCityIndex(currentCityIndex + changeValue);
    setCity(citiesArray[currentCityIndex + changeValue]);
    setCities(
      citiesArray.slice(
        currentCityIndex + changeValue,
        currentCityIndex + changeValue + 3
      )
    );
  };
  if (loading)
    return (
      <div class="loading-data">
        <div>
          <img className="Logo" src={logo} alt="logo" />
        </div>
        <div class="loadingContainer">
          <div class="ball1"></div>
          <div class="ball2"></div>
          <div class="ball3"></div>
          <div class="ball4"></div>
        </div>
      </div>
    );
  return (
    <div className="home-page">
      <img className="home-page-background" src={city.pic1} alt={city.name} />
      <NavBar />
      <h1 className="home-page-title">Welcome To The Holy Land</h1>
      <div className="homepage-city-bar">
        <City city={city} />
        <CitiesCarousel cities={cities} handleCityChange={handleCityChange} />
      </div>
    </div>
  );
}

export default HomePageCulTour;
