/* global createCanvas, colorMode, HSB, noStroke, color, background, fill, ellipse, text, stroke, line, width, height, mouseX, mouseY */

// We'll use variables for most of our colors in this code-along.
let backgroundColor,
  color1,
  color2,
  color3,
  color4,
  textColor,
  globalS,
  globalB;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  globalS = 50;
  globalB = 100;

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  color1 = color(90, globalS, globalB);  //green
  color2 = color(200, globalS, globalB); //
  color3 = color(50, globalS, globalB);
  color4 = color(30, globalS, globalB);
}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  drawCenterLineH();
  drawCenterLineV();
  if (mouseX < width / 2) {
    if (mouseY < height/2){
      springMode();
    }
    else{
      fallMode();
    }
  } 
  
  else{
    if (mouseY < height/2){
      summerMode();
    }
    else{
      winterMode();
    }
  }
    

  // The red and blue circles:
  fill(color1);
  ellipse(width / 4, height * 0.25, 50);
  fill(color3);
  ellipse(width / 4, height * 0.75, 50);
  fill(color2);
  ellipse(width * 0.75, height * 0.25, 50);
  fill(color4);
  ellipse(width * 0.75, height * 0.75, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch (" + mouseX + ", " + mouseY + ")", 20, 20);
}

function drawCenterLineH() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(0, height / 2, width, height / 2);
  noStroke();
}

function drawCenterLineV() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width / 2, 0, width / 2, height);
  noStroke();
}

function springMode() { //pink+green
  backgroundColor = color(350,24.7,100);
  textColor = color(20);
  color1 = color(90, globalS, globalB);
  color2 = color(200, globalS, globalB);
  color3 = color(50, globalS, globalB);
  color4 = color(30, globalS, globalB);
}

function summerMode() { //green+blue
  backgroundColor = color(90,50,70);
  textColor = color(95);
  color1 = color(200, globalS, globalB);
  color2 = color(90, globalS, globalB);
  color3 = color(30, globalS, globalB);
  color4 = color(50, globalS, globalB);

}

function fallMode() { //red+orange
  backgroundColor = color(380,50,150);
  textColor = color(20);
  color1 = color(30, globalS, globalB);
  color2 = color(200, globalS, globalB);
  color3 = color(50, globalS, globalB);
  color4 = color(90, globalS, globalB);
}

function winterMode() { //blue+grey
  backgroundColor = color(211, 47, 34);
  textColor = color(95);
  color1 = color(200, globalS, globalB);
  color2 = color(30, globalS, globalB);
  color3 = color(90, globalS, globalB);
  color4 = color(50, globalS, globalB);
}
