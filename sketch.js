
var hr;
var mn;
var sc;






function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  hr=hour();
  mn=minute();
  sc=second();

  

  
 
}

function draw() {
  background(0);  
  angleMode(DEGREES);

  hrAngle = map(hr,0,60,0,360)
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  translate(0,0)
  
 
  push()
  //rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(400,90,400,200);
  pop()

  push()
  //rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(300,250,400,200);
  pop()

  push()
  //rotate(scAngle);
  stroke("green");
  strokeWeight(7);
  line(300,300,400,200);
  pop()
  
  
  

  //arc(hr, 55, 50, 50, 0, HALF_PI);
//noFill();
//arc(mn, 55, 60, 60, HALF_PI, PI);
//arc(sc, 55, 70, 70, PI, PI + QUARTER_PI);
//arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

  
  
  //pop()
  drawSprites();
}

function hour(){text('Current hour:\n' + hr, 5, 50);};


function minute(){text('Current minute: \n' + mn, 5, 50);};


function second(){text('Current second: \n' + sc, 5, 50);};

