var isOverRectangle;
var bgColor;
var circleX, circleY;

function setup(){
  createCanvas(windowWidth, windowHeight);
  bgColor = color(100);
  circleX = random(0, width);
  circleY = random(0, height);
}

function draw(){
  background(bgColor);
  // ellipse( circleX, circleY,50,50);

  var x = noise( millis() / 5000 );
  var x2 = map( noise( 100 + millis() / 5000 ), 0, 1, 0, width);

  var nx = map(x, 0, 1, 0, width );

  ellipse( nx, height / 2, 50, 50);
  ellipse( x2, height / 2, mm, mm);
}













































