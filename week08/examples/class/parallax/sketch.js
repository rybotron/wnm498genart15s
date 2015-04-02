var balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  // for( var i = 0; i < 1; i++ ){
  //   balls.push( new Ball(50) );
  // }
}

function draw(){
  background(0);

  var p = ( width / 2 - mouseX ) + width / 2;
  print(p);
  fill(25, 255, 150);
  ellipse( p, height / 2, 100, 100); 
}













































