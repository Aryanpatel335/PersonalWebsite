import React, { useEffect, useRef } from "react";
import "./StockCanvas.css";

const StockCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let intervalId;

    // Set the canvas width and height to the window width and height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Resize the canvas when the window resizes
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Define the candle width and max height
    const candleWidth = 10;
    const maxHeight = 75;

    // Create a candle class
    class Candle {
      constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        const wickHeight = this.height * 0.2;
        const bodyHeight = this.height * 0.6;
        const bodyY = this.y + wickHeight / 2;
        // Draw the wick
        ctx.moveTo(this.x + this.width / 2, this.y);
        ctx.lineTo(this.x + this.width / 2, this.y + this.height);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        // Draw the body
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, bodyY, this.width, bodyHeight);
        ctx.closePath();
      }
      update() {
        // Change the height of the candle randomly
        this.height = Math.random() * maxHeight;
      }
    }

    // Create an array of candles
    let candles = [];
    let total_candles = window.innerWidth < 768 ? 35 : 150;
    for (let i = 0; i < total_candles; i++) {
      let x = Math.random() * (canvas.width - candleWidth);
      let y = Math.random() * (canvas.height - maxHeight);
      let height = Math.random() * maxHeight;
      let color = Math.random() < 0.5 ? "#76b852" : "#e74c3c"; // green or red
      candles.push(new Candle(x, y, candleWidth, height, color));
    }

    // Create an update function
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      candles.forEach((candle) => {
        candle.update();
        candle.draw();
      });
    };

    // Start the animation
    update();
    intervalId = setInterval(update, 3000); // Update every 2 seconds

    // Cleanup function to cancel the animation when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(intervalId);
    };
  }, []);

  return <canvas ref={canvasRef} className="stock-canvas" />;
};

export default StockCanvas;
