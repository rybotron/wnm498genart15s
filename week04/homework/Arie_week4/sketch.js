// var balls = new Array();
var balls = [];
var eyes = [];

var ball;
var eye;

function setup(){
  createCanvas(windowWidth, windowHeight);

  for( var i = 0; i < 50; i++ ){
    balls.push( new Ball(50) );
  }

  for( var e = 0; e < 50; e++ ){
    eyes.push( new Eye(30) );
  }

  // ball = new Ball(20);
  // ballTwo = new Ball(50);
  // ballThree = new Ball(200);
  // ballFour = new Ball(100);
}

function draw(){
  background(0);
  for( var i = 0; i < balls.length; i++ ){
    balls[i].update();
    balls[i].draw();
  }

  for( var e = 0; e < eyes.length; e++ ){
    // eyes[e].update();
    eyes[e].draw();
  }
}
function Eye( position ){
  this.x = random( 0, width );
  this.y = random( 0, height );
}

Eye.prototype.draw = function(){
  push();
  stroke(255, 102, 0);
  strokeWeight(2);
  translate(this.x, this.y);

  bezier(20, 20, 40, 0, 60,0 ,80, 20);
  bezier(20, 20, 40, 40, 60,40 ,80, 20);
  pop();

  push();
  stroke(255, 102, 0);
  strokeWeight(2);
  noFill();
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 20, 20);
  pop();
}

function Ball( radius ){
  this.x = random( 0, width );
  this.y = random( 0, height );
  this.xSpeed = random(-4, 3);
  this.ySpeed = random(-4, 3);
  this.radius = random(30, 60);
  this.color = color( random (250), random(200), random(200,250) );
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
  noStroke();
  ellipse(this.x, this.y, this.radius, this.radius / 2 );

  triangle( this.x - this.radius/2 - this.radius/3, this.y - this.radius/8,
            this.x - this.radius/2 , this.y,
            this.x - this.radius/2 - this.radius/3, this.y + this.radius/8);

  // push();
  // stroke(255, 102, 0);
  // strokeWeight(2);
  // translate(this.x, this.y);

  // bezier(20, 20, 40, 0, 60,0 ,80, 20);
  // bezier(20, 20, 40, 40, 60,40 ,80, 20);
  // pop();

  // push();
  // stroke(255, 102, 0);
  // strokeWeight(2);
  // noFill();
  // ellipseMode(CENTER);
  // ellipse(width/2, height/2, 20, 20);
  // pop();

  push();
  stroke(255, 102, 0);
  strokeWeight(2);
  translate(width/2-50, height/2-20);

  bezier(20, 20, 40, 0, 60,0 ,80, 20);
  bezier(20, 20, 40, 40, 60,40 ,80, 20);
  pop();

  push();
  stroke(255, 102, 0);
  strokeWeight(2);
  noFill();
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 20, 20);
  pop();

}

Ball.prototype.checkEdges = function(){
  if( this.x >= width || this.x <= 0) this.xSpeed *= -1;
  if( this.y >= height || this.y <= 0) this.ySpeed *= -1;
}

