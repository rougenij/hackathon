import React from "react";
import Button from "../../Components/Button/Button";

import "./Card.style.css";
function Card(props) {
  return (
    <div className="Main">
      <div className="Details">
        <h5>{props.Details}</h5>
        <Button buttonText={"Explore"} />
      </div>
      <div className="Card">
        <h3 className="Title">{props.title}</h3>
        <img className="Image" src={props.img}></img>
      </div>
    </div>
  );
}

export default Card;
