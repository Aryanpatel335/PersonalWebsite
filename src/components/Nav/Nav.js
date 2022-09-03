import React from "react";
import logo_AP from "../../resources/logo_AP.png";
import "./Nav.css";
export const Nav = () => {
  return (
    <nav id="navbar">
      <img src={logo_AP} alt="logoAP" width="60px" height="60px" />
      <h1>aryan patel</h1>
      <ul id="nav-list">
        <li className="nav-item">
          <a href="#about">about</a>
        </li>
        <li className="nav-item">
          <a href="#projectSection">projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};
