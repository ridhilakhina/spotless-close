"use strict";

let font = 'UnicornFarts-Regular';
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function preload() {
}

function setup() {
  
  createCanvas(displayWidth, displayHeight);
  frameRate(100);
  fill('#f00');
  textFont(font);
  textSize(150);
  text('A', 160, height/2);
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    background('#fff');
    // fill(random(0, 120));
    fill(random(255), random(255), random(255));
    let newLetter = letters.charAt(frameCount%20);
    text(newLetter, mouseX-160, height/2);
  }
}