var a = 50, b = 80;
var c;
function setup() {
  createCanvas(windowWidth, windowWidth);
  //velocidad
}

function draw() {
  colorMode(HSB,360,100,100);
  //background(0,100,100);
  fill(random(0,50),100 , 100);
  noStroke();
  c = a * random(1,5);
  ellipse(mouseX,mouseY,c,c);
}
