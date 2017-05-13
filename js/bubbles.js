function setup() {
  createCanvas(900, 520);
}

var shrinking = false;
var maxrad = 400;
var maxsize = maxrad;
var xmax = maxsize-150;

var xagg = xmax + maxrad;
var yagg = 40;
var aggper = .09;
var radagg = aggper*maxrad;
var aggsize = aggper*maxsize;

var xcomm = xagg;
var ycomm = yagg + 60;
var commper = .12;
var radcomm = commper*maxrad;
var commsize = commper*maxsize;

var xind = xagg;
var yind = ycomm + 85;
var indper = .21;
var radind = indper*maxrad;
var indsize = indper*maxsize;

var xtrans = xagg;
var ytrans = yind + 120;
var transper = .27;
var radtrans = transper*maxrad;
var transsize = transper*maxsize;

var xelec =  xagg;
var yelec = ytrans+ 135;
var elecper = .29;
var radelec = elecper*maxrad;
var elecsize = elecper*maxsize;

function draw() {
  background(54);
  noStroke();
  fill(255, 38, 38, 100);
  ellipse(xmax, height/2, maxrad, maxrad);

  fill(150, 255, 255, 100);
  ellipse(xmax, height/2, maxsize*.74, maxsize*.74);

  noFill();

  noStroke();
  textSize(15);
  textAlign(LEFT);
  fill(255);
  text("Electricity", xelec - elecsize - 40, yelec);
  text("Agriculture", xelec - elecsize - 40, yagg);
  text("Transportation", xelec - elecsize - 40, ytrans);
  text("Industry", xelec - elecsize - 40, yind);
  text("Commericial\nResidential", xelec - elecsize - 40, ycomm);
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

  if(maxrad > maxsize*.74){
  if (mouseIsPressed){

    if(mouseX < xtrans + radtrans/2 && mouseX > xtrans - radtrans/2 && mouseY < ytrans + radtrans/2 && mouseY > ytrans - radtrans/2){
      radtrans -=.01*transsize;
      maxrad -= .01*transper*maxsize;
  }
    if(mouseX < xcomm + radcomm/2 && mouseX > xcomm - radcomm/2 && mouseY < ycomm + radcomm/2 && mouseY > ycomm - radcomm/2){
      radcomm -=.01*commsize;
      maxrad -= .01*commper*maxsize;
    }

    if(mouseX < xelec + radelec/2 && mouseX > xelec- radelec/2 && mouseY < yelec + radelec/2 && mouseY > yelec - radelec/2){
      radelec -=.01*elecsize;
      maxrad -= .01*elecper*maxsize;
    }

    if(mouseX < xagg + radagg/2 && mouseX > xagg - radagg/2 && mouseY < yagg + radagg/2 && mouseY > yagg - radagg/2){
      radagg -=.01*aggsize;
      maxrad -= .01*aggper*maxsize;
    }

    if(mouseX < xind + radind/2 && mouseX > xind - radind/2 && mouseY < yind + radind/2 && mouseY > yind - radind/2){
      radind -=.01*indsize;
      maxrad -= .01*indper*maxsize;
    }

  }
}
else{
  // background(54);
  fill(255);
  textSize(20);
  noStroke();
  textAlign(CENTER);
  text("GOOD JOB!!!", width/2, height-50);
}
}


function thing(rad){
  rad-=2;
}
