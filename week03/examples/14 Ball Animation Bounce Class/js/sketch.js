// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
// 
// Example inspired by:
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Example 1-1: Bouncing Ball, no vectors


var ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball();
};

function draw() {
  background(51);
  ball.update();
  ball.display();
};



// Ball Class that will create ball objects
function Ball(){
  this.x = 100;
  this.y = 100;
  this.xSpeed = 5;
  this.ySpeed = 7;
}

Ball.prototype.update = function(){
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if ((this.x > width) || (this.x < 0)) {
    this.xSpeed = this.xSpeed * -1;
  }
  if ((this.y > height) || (this.y < 0)) {
    this.ySpeed = this.ySpeed * -1;
  }
}

Ball.prototype.display = function(){
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(this.x, this.y, 50, 50);
}

