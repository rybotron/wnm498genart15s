// var balls = new Array();
var balls = [];
<<<<<<< Updated upstream
var bb;
var ball;


function setup(){
  createCanvas(windowWidth, windowHeight);
  bb = new Basketball();
  ball = new Ball();
=======

var ball, ballTwo, ballThree;

function setup(){
  createCanvas(windowWidth, windowHeight);

  for( var i = 0; i < 500; i++ ){
    balls.push( new Ball(50) );
  }

  // ball = new Ball(20);
  // ballTwo = new Ball(50);
  // ballThree = new Ball(200);
  // ballFour = new Ball(100);
>>>>>>> Stashed changes
}

function draw(){
  background(0);
<<<<<<< Updated upstream
  bb.update();
  bb.draw();

  ball.update();
  ball.draw();
}


=======

  for( var i = 0; i < balls.length; i++ ){
    balls[i].update();
    balls[i].draw();
  }

  // ball.update();
  // ball.draw();
  // ballTwo.update();
  // ballTwo.draw();
  // ballThree.update();
  // ballThree.draw();
  // ballFour.update();
  // ballFour.draw();
}

function Ball( radius ){
  this.x = random( 0, width );
  this.y = random( 0, height );
  this.xSpeed = random(-15, 15);
  this.ySpeed = random(-15, 15);
  this.radius = random(5, 100);
  this.color = color( random (255), random(255), random(255) );
  this.r = random();
  this.rotation = random(0, 360) * PI / 180;
}

Ball.prototype.update = function(){
  this.checkEdges();
  this.x += this.xSpeed;
  this.y += this.ySpeed;
}

Ball.prototype.draw = function(){
  fill(this.color);
  // push();
  // rotate(this.rotation);
  if( this.r > .666 ){
    rect(this.x, this.y, this.radius, this.radius);
  }else if( this.r > .333 ){
    ellipse(this.x, this.y, this.radius, this.radius); 
  }else{
    triangle(this.x, this.y, this.x + 30, this.y + 50, this.x - 30, this.y + 50);
  }
  // pop();
  
}

Ball.prototype.checkEdges = function(){
  if( this.x >= width || this.x <= 0) this.xSpeed *= -1;
  if( this.y >= height || this.y <= 0) this.ySpeed *= -1;
}
>>>>>>> Stashed changes











































