import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; 


const x = 130;
const y = 70;
const wheelWidth = 50;
const wheelHeight = 100;

export default function TractionSketch() {
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(450, 450).parent(canvasParentRef);
      };
    
      const draw = (p5: p5Types) => {
        p5.background('#0b0d0e');

        // Draw the body of the car
        p5.rect(x, y, 200, 300);

        // Draw the wheels
        p5.rect(x - 50, y-50, wheelWidth, wheelHeight); // Front left wheel
        p5.rect(x + 200, y-50, wheelWidth, wheelHeight); // Front right wheel
        p5.rect(x-50, y + 250, wheelWidth, wheelHeight); // Rear left wheel
        p5.rect(x + 200, y + 250, wheelWidth, wheelHeight); // Rear right wheel
    };
  return (
        <Sketch setup={setup} draw={draw} />
  );
}