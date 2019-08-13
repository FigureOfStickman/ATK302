function setup() {
  // put setup code here
  createCanvas(1920, 1080);
}

function draw() {
  // put drawing code here
fill(random(255),random(255),random(255));
  ellipse(mouseX, mouseY, 100, 100);
}
