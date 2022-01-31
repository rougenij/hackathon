import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.style.css";
import logo from "../../assets/images/logo.png";
function NavBar(props) {
  return (
    <div className="NavBar" id={props.id}>
      <Link className="Link" to={"/"}>
        <img className="Logo" src={logo} alt="logo"></img>
      </Link>
    </div>
  );
}

export default NavBar;
