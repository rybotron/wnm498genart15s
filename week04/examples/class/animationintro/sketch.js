var x, y;
var xSpeed, ySpeed;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  xSpeed = 15;
  ySpeed = 10;
}

function draw(){
  background(0);
  // x = x + 10;

  x += xSpeed;
  y += ySpeed;

  // Off & On screen
  // if ( x > width ) x = 0;
  // if ( y > height) y = 0; 
  
  if( x >= width || x <= 0) xSpeed = xSpeed * -1;
  if( y >= height || y <= 0) ySpeed = ySpeed * -1;


  // print(x, y);
  // x--;
  // y--;
  ellipse( x, y, 50, 50);
}













































