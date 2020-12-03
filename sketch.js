function setup() {
  createCanvas(800,800);
  createSprite(600, 400, 50, 50);
 angleMode(); 
}

function draw() {
  background(255,255,255);
  hr = hour();
  mn = minute();
  sc  = second();
  
  angleMode(DEGREES);   
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);
  stroke(255,0);;
  strokeWeight(7);
  line(0,0,76,0);
  translate(200,200);
 rotate(-90);
  push();
  rotate(scAngle);
  stroke(255,0,0);;
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(mnAngle);
  stroke(255,0,255);;
  strokeWeight(7);
  line(0,0,100,0);
  pop();
push();
  rotate(hrAngle);
  stroke(255,255,0);;
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  drawSprites();
}