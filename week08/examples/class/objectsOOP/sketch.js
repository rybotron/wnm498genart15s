var balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

  for( var i = 0; i < 1; i++ ){
    balls.push( new Ball(50) );
  }
}

function draw(){
  background(0);
  for( var i = 0; i < balls.length; i++ ){
    balls[i].update();
    balls[i].draw();
  }
}











































