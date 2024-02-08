import React from "react";
import "./Intro.css";
import cartoonImage from "../../resources/cartoon.png";
import StockCanvas from "../StockCanvas/StockCanvas";
export const Intro = () => {
  return (
    <div className="intro">
      <StockCanvas />
      <img src={cartoonImage} alt="Cartoon representation" />
      {/* Update the src with the correct path if using the public folder */}
      <p>hi, my name is aryan patel</p>
      <p>i am a software engineering student</p>
    </div>
  );
};
