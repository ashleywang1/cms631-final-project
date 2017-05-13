function setup() {
  createCanvas(900, 520);
}

var shrinking = false;
var maxrad = 400;
var maxsize = maxrad;
var xmax = maxsize-150;

var xagg = xmax + maxrad - 50;
var yagg = 40;
var aggper = .09;
var radagg = aggper*maxrad;
var aggsize = aggper*maxsize;

var xcomm = xmax + maxrad - 50;
var ycomm = yagg + 60;
var commper = .12;
var radcomm = commper*maxrad;
var commsize = commper*maxsize;

var xind = xmax + maxrad - 50;
var yind = ycomm + 85;
var indper = .21;
var radind = indper*maxrad;
var indsize = indper*maxsize;

var xtrans = xmax + maxrad - 50;
var ytrans = yind + 120;
var transper = .27;
var radtrans = transper*maxrad;
var transsize = transper*maxsize;

var xelec = xmax + maxrad - 50;
var yelec = ytrans+ 135;
var elecper = .29;
var radelec = elecper*maxrad;
var elecsize = elecper*maxsize;

function draw() {
  background(54);
//  background(200);
  noStroke();

  // fill(150, 255, 255, 50);
  // ellipse(xmax, height/2, maxsize*.8, maxsize*.8);

  fill(255, 38, 38, 100);
  ellipse(xmax, height/2, maxrad, maxrad);

  fill(150, 255, 255, 100);
  ellipse(xmax, height/2, maxsize*.8, maxsize*.8);

  noFill();
  // stroke(150, 255, 255);
  // strokeWeight(3);
  // ellipse(xmax, height/2, maxsize*.8, maxsize*.8);

  noStroke();

  fill(255, 56, 96);
  ellipse(xelec, yelec, radelec, radelec);
  fill(255, 61, 75);
  ellipse(xtrans, ytrans, radtrans, radtrans);
  fill(255, 69, 59);
  ellipse(xind, yind, radind, radind);
  fill(255,83,67);
  ellipse(xcomm, ycomm, radcomm, radcomm);
  fill(255,82,79);
  ellipse(xagg, yagg, radagg, radagg);


  fill(200, 100, 200);

  if (mouseIsPressed){
    if(mouseX < xtrans + radtrans/2 && mouseX > xtrans - radtrans/2 && mouseY < ytrans + radtrans/2 && mouseY > ytrans - radtrans/2){
      radtrans -=.5;
      maxrad -= (.5/transsize)*maxsize;
  }
    if(mouseX < xcomm + radcomm/2 && mouseX > xcomm - radcomm/2 && mouseY < ycomm + radcomm/2 && mouseY > ycomm - radcomm/2){
      radcomm -=.5;
      maxrad -= (.5/commsize)*maxsize;
    }

    if(mouseX < xelec + radelec/2 && mouseX > xelec- radelec/2 && mouseY < yelec + radelec/2 && mouseY > yelec - radelec/2){
      radelec -=.5;
      maxrad -= (.5*(elecsize/maxsize))*elecper;
    }

    if(mouseX < xagg + radagg/2 && mouseX > xagg - radagg/2 && mouseY < yagg + radagg/2 && mouseY > yagg - radagg/2){
      radagg -=.5;
      maxrad -= (.5*(aggsize/maxsize))*aggper;
    }

    if(mouseX < xind + radind/2 && mouseX > xind - radind/2 && mouseY < yind + radind/2 && mouseY > yind - radind/2){
      radind -=.5;
      maxrad -= (.5*(indsize/maxsize))*indper;
    }

  }
}


function thing(rad){
  rad-=2;
}
