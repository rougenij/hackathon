import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.style.css";
import logo from "../../assets/images/logo.png"
function NavBar() {
  return (
    <div className="NavBar">
      <Link className="Link" to={"/"}><img className="Logo" src={logo}></img></Link> 
 

    
    </div>
  );
}

export default NavBar;
