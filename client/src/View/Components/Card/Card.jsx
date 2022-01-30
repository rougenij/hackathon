import React from "react";
import Button from "../../Components/Button/Button";

import "./Card.style.css";
function Card(props) {
  return (
    <div className="Main">
      <div className="Details">
        <h5 >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos
          quibusdam dolorem cumque, laudantium voluptates, fugit voluptate modi
          sunt eius voluptatum architecto ratione doloremque exercitationem.
          Error, veritatis? Cupiditate, fugit amet.
        </h5>
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
