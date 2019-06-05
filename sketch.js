function setup() {
  createCanvas(1600, 800);
}

function draw() {
  stroke(0);      
  fill(mouseX/6.27, mouseY/3.14, random(0, 255));
  ellipse(mouseX, mouseY, 100, 100);
}
