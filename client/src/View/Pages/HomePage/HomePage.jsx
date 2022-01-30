import React from "react";
import Card from "../../Components/Card/Card";
import NavBar from "../../Components/NavBar/NavBar";
import cardImg from "../../assets/images/jerusalem.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./HomePage.style.css";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
function HomePage() {
  return (
    <div className="HomePage">
      <NavBar />
      <Carousel>
      <Card img={cardImg} title={'Jerusalem'}/>
      <Card img={cardImg} title={'Haifa'}/>
      <Card img={cardImg} title={'Bethlehem'}/>
      <Card img={cardImg} title={'Tel-Aviv'}/>
      </Carousel>
    

     
      
    </div>
  );
}

export default HomePage;
