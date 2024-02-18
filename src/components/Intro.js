import React from "react";
import cartoonImage from "../resources/cartoon.png";
import StockCanvas from "./StockCanvas";
import Nav from "./Nav";

const Intro = () => {
  return (
    <div className="relative h-screen bg-black">
      {/* Overlay Nav without specifying a height, allowing content to center vertically in the remaining space */}
      <div className="absolute top-0 left-0 z-20 w-full">
        <Nav />
      </div>
      <div className="flex justify-center items-center h-full">
        {/* StockCanvas is positioned absolutely to fill the entire screen but under the content */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
          <StockCanvas />
        </div>
        {/* Centered content accounting for Nav, using padding or margin if necessary */}
        <div
          className="z-10 flex flex-col items-center"
          style={{ paddingTop: "var(--nav-height, 96px)" }}
        >
          <img
            src={cartoonImage}
            alt="Cartoon representation"
            className="w-70 h-80 border-3 border-gray rounded-full mb-5"
          />
          <p>hi, my name is aryan patel</p>
          <p>i am a software engineering student</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
