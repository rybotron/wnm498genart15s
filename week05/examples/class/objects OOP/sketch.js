// var balls = new Array();
var balls = [];
var bb;
var ball;


function setup(){
  createCanvas(windowWidth, windowHeight);
  bb = new Basketball();
  ball = new Ball();
}

function draw(){
  background(0);
  bb.update();
  bb.draw();

  ball.update();
  ball.draw();
}













































