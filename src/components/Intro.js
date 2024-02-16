import React from "react";
import cartoonImage from "../resources/cartoon.png";
import StockCanvas from "./StockCanvas";
const Intro = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray relative">
      <div className="absolute inset-0 z-0">
        <StockCanvas />
      </div>
      <img
        src={cartoonImage}
        alt="Cartoon representation"
        className="z-10 w-70 h-80 border-3 border-gray rounded-full mb-5"
      />
      <p className="z-10">hi, my name is aryan patel</p>
      <p className="z-10">i am a software engineering student</p>
    </div>
  );
};

export default Intro;
