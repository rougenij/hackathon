import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.style.css";
import logo from "../../assets/images/CultOur.png"
function NavBar() {
  return (
    <div className="NavBar">
      <Link className="Link" to={"/home"}><img className="Logo" src={logo}></img></Link> 
      <Link className="Link" to={"/home"}>Destinations</Link>
      <Link className="Link" to={"/about"}>About</Link>
    </div>
  );
}

export default NavBar;
