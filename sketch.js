function setup() {
  createCanvas(800, 800);
}

function draw() {
  stroke(0);      
  fill(mouseX, mouseY, random(0, 255));
  ellipse(mouseX, mouseY, 100, 100);
}