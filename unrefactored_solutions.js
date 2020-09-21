/* global createCanvas, colorMode, HSB, noStroke, color, background, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

let backgroundColor, color1, color2, textColor, globalS, globalB;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  // Set saturation and brightness globally so we can experiment with different
  // color palettes as we go without having to change multiple things
  globalS = 90;
  globalB = 90;
  // We'll keep background color in a variable so we can modify it in other
  // functions.
  backgroundColor = color(95);
  // The variable color1 will be used for the ellipse on the left, and color2
  // will be the ellipse on the right.
  color1 = color(0, globalS, globalB);
  color2 = color(200, globalS, globalB);
  // We will use this textColor variable as a way to make sure the text is
  // always visible against a changing background.
  textColor = color(20);
}

function draw() {
  background(backgroundColor);
  stroke(textColor);
  line(width / 2, 0, width / 2, height);
  noStroke();
  if (mouseX > width / 2) {
    backgroundColor = color(20);
    color1 = color(200, globalS, globalB);
    color2 = color(0, globalS, globalB);
    textColor = color(95);
  } else {
    backgroundColor = color(95);
    color1 = color(0, globalS, globalB);
    color2 = color(200, globalS, globalB);
    textColor = color(20);
  }
  fill(color1);
  ellipse(1 / 4 * width, height / 2, 50);
  fill(color2);
  ellipse(3 / 4 * width, height / 2, 50);
  fill(textColor);
  text("Flip the switch", 20, 20);
  ellipse(mouseX, mouseY, 50);
}