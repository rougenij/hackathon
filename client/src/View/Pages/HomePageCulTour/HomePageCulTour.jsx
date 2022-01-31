import React, { useState } from "react";
import City from "../../Components/City/City";
import CitiesCarousel from "../../Components/CitiesCarousel/CitiesCarousel";
import NavBar from "../../Components/NavBar/NavBar";
import "./HomePageCulTour.style.css";

const citiesArr = [
  {
    name: "Jerusalem",
    description:
      "This is the heart of the Holy Land, where the Jews raised the First Temple to keep the Ark of the Covenant safe, where Jesus was crucified and rose again, and where the Prophet Muhammad ascended to heaven to receive God's word.",
    pic1: "https://www.planetware.com/photos-large/ISR/israel-jerusalem-dome-of-the-rock.jpg",
    pic2: "https://www.planetware.com/photos-large/ISR/israel-jerusalem-wailing-wall-and-jewish-quarter.jpg",
  },
  {
    name: "Tel Aviv",
    description:
      'Nicknamed "The White City," the town was awarded UNESCO World Heritage Status in 2003 in recognition of its fine examples of Bauhaus architecture (an early 20th-century Modernist style of building). There are also a number of art galleries and small, specialist museums for sightseeing off the beach.',
    pic1: "https://www.planetware.com/photos-large/ISR/israel-tel-aviv-beach.jpg",
    pic2: "https://www.planetware.com/photos-large/ISR/israel-tel-aviv-jaffa-port.jpg",
  },
  {
    name: "Haifa",
    description:
      "Modern Haifa is a bustling port town, but unlike many industry-focused cities, its landscape of steep cliffs rolling down to the shore gives it a beautiful setting.",
    pic1: "https://www.planetware.com/photos-large/ISR/israel-haifa-bahai-shrine-and-gardens.jpg",
    pic2: "https://www.planetware.com/photos-large/ISR/israel-haifa-downtown-haifa-panorama.jpg",
  },
  {
    name: "Negev",
    description:
      "The Negev Region is a desert adventurer's dream packed with tourist attractions, from ancient ruins to ruggedly handsome desert scenery.",
    pic1: "https://www.planetware.com/photos-large/ISR/israel-negev-shivta-ruins.jpg",
    pic2: "https://www.planetware.com/photos-large/ISR/israel-negev-makhtesh-ramon.jpg",
  },
  {
    name: "Dead Sea",
    description:
      "At more than 400 meters below sea level, this Great Rift Valley inland lake has an incredibly high salt content due to evaporation being the only water outlet. This is what causes the bizarre buoyancy of the water.",
    pic1: "https://www.planetware.com/wpimages/2021/02/israel-dead-sea-region-top-attractions-kalia-beach.jpg",
    pic2: "https://www.planetware.com/photos-large/ISR/israel-dead-sea-qumran-cave-of-the-dead-sea-scrolls.jpg",
  },
  {
    name: "Bethlehem",
    description:
      "Bethlehem is famous for being the place of Jesus Christ's birth and has been celebrated in Christmas carols and hymns through the centuries, but the bustle of the modern city can be a surprise for some visitors.",
    pic1: "https://www.planetware.com/photos-large/ISR/palestinian-territories-bethlehem-church-of-the-nativity.jpg",
    pic2: "https://www.planetware.com/photos-large/ISR/palestinian-territories-bethlehem-mar-saba-monastery.jpg",
  },
  {
    name: "Nablus",
    description:
      "With a history stretching right back to Abraham's arrival in the land of Canaan, Nablus is one of the best places to visit for travelers seeking out significant religious sites.",
    pic1: "https://www.planetware.com/photos-large/ISR/palestinian-territories-nablus-mount-gerizim.jpg",
    pic2: "https://www.planetware.com/photos-large/ISR/israel-dead-sea-wadi-arugot2.jpg",
  },
];

function HomePageCulTour() {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [city, setCity] = useState(citiesArr[currentCityIndex]);
  console.log("city", city);
  //to change fetch from api
  const [cities, setCities] = useState(
    citiesArr.slice(currentCityIndex, currentCityIndex + 3)
  );

  const handleCityChange = (changeValue) => {
    if (currentCityIndex + changeValue < 0) return;
    if (currentCityIndex + changeValue > citiesArr.length - 1) return;

    setCurrentCityIndex(currentCityIndex + changeValue);
    setCity(citiesArr[currentCityIndex + changeValue]);
    setCities(
      citiesArr.slice(
        currentCityIndex + changeValue,
        currentCityIndex + changeValue + 3
      )
    );
  };

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
