import React from "react";
import cartoonImage from "../resources/cartoon.png";
import StockCanvas from "./StockCanvas";
import Nav from "./Nav";
const Intro = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center h-dvh bg-black relative">
        <div className="absolute inset-0 z-0">
          <StockCanvas />
        </div>
        <div className="justify-center z-10 flex items-center flex-col">
          <img
            src={cartoonImage}
            alt="Cartoon representation"
            className="z-10 justify-center items-center w-70 h-80 border-3 border-gray rounded-full mb-5"
          />
          <p className="z-10">hi, my name is aryan patel</p>
          <p className="z-10">i am a software engineering student</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
