import React from "react";
import logo_AP from "../../resources/logo_AP.png";
import "./Nav.css";
import resume from "../../resources/Resume_Aryan_Patel_02_23_2_0.pdf";
import ap from "../../resources/ap.jpeg";

export const Nav = () => {
  return (
    <nav id="navbar">
      <div className="left-side">
        {/* <img className="profile-picture" src={ap} alt="pfp" width="60px" height="60px" /> */}
        <img
          className="logo"
          src={logo_AP}
          alt="logo"
          width="60px"
          height="60px"
        />
        <h1>aryan patel</h1>
      </div>
      <ul id="nav-list">
        <li className="nav-item">
          <a href="#about">about</a>
        </li>
        <li className="nav-item">
          <a href="#experience">experience</a>
        </li>
        <li className="nav-item">
          <a href="#projectSection">projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact">contact</a>
        </li>
        {/* <li className="nav-item">
          <a href={resume} target="_blank" rel="noreferrer">
            resume
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
