import React, { useEffect, useRef } from "react";
import "./StockCanvas.css";

const StockCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set the canvas width and height to the window width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create a candle class
    class Candle {
      constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = Math.random() < 0.5 ? "green" : "red";
      }
      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        // Draw the wick
        const wickX = this.x + this.width / 2;
        ctx.moveTo(wickX, this.y);
        ctx.lineTo(wickX, this.y + this.height);
        ctx.stroke();
        // Draw the body
        ctx.fillRect(
          this.x,
          this.y + this.height * 0.1, // Adjust this value to change the candle body position
          this.width,
          this.height * 0.8 // Adjust this value to change the candle body height
        );
        ctx.closePath();
      }
    }

    // Create an array of candles
    let candles = [];
    const candleWidth = 10; // Width of the candle
    for (let i = 0; i < canvas.width / candleWidth; i++) {
      let x = i * (candleWidth + 5); // +5 for spacing between candles
      let height = Math.random() * canvas.height * 0.1;
      let y = canvas.height / 2 - height / 2; // Center the candles
      candles.push(new Candle(x, y, candleWidth, height));
    }

    // Create an update function
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      candles.forEach((candle) => {
        candle.draw();
      });
      animationFrameId = window.requestAnimationFrame(update);
    }

    update();
    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} className="stock-canvas"></canvas>;
};

export default StockCanvas;
