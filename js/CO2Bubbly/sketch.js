function setup() {
  createCanvas(windowWidth- 100, 500);
}
var shrinking = false;
var emrad = 300;
var x1 = 500;
var y1 = 400;
var rad1 = 100;
function draw() {
  background(255);

  fill(255, 0, 0, 150);
  ellipse(200, 300, emrad, emrad);
  fill(0, 255, 20, 150);
  ellipse(200, 300, 100, 100);

  fill(150, 255, 255);
  ellipse(x1, y1, rad1, rad1);

  if (mouseIsPressed){
    if(mouseX < x1 + rad1 && mouseX > x1 - rad1 && mouseY < y1 + rad1 && mouseY > y1 - rad1){
    rad1 -=1;
  }
  }
  thing(rad1);
}


function thing(rad){
  rad-=2;
}
