var osc; // oscillator to play noise

function setup() {
  createCanvas(1600, 800);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
  stroke(0);      
  fill(mouseX, mouseY, random(0, 255));
  osc.amp(mouseY/1000);
  osc.freq(mouseX+200);
  ellipse(mouseX, mouseY, 100, 100);
}
