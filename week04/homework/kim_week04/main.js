
var rings = [];
var ring, ringTwo;
var xoff = 0.0;
var xincrement = 0.01;

function setup(){
	createCanvas (windowWidth, windowHeight);
	for ( var i = 0; i < 60; i++){
		rings.push( new Ring(20))
	}
}

function draw(){
	background(0,25);
	var n = noise(xoff) * width;
	xoff += xincrement;

	 if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
  	} 


  	for (var i = 0; i < rings.length; i++){
		rings[i].update();
		rings[i].draw();
		rings[i].checkEdges();
	}
}

	function Ring(radius){
	this.color = color(random(255), random(255), random(255));
	this.x = random(0,width);
	this.y = random(0,height);
	this.xSpeed = random(-1, 1);
	this.ySpeed = random(-1, 1);
	this.radius = radius;
	this.r = random ();
}

Ring.prototype.update = function(){

	this.x += this.xSpeed;
	this.y += this.ySpeed;
}

Ring.prototype.draw = function(){
	stroke(this.color)
	noFill();
	ellipse(this.x, this.y, this.radius, this.radius);
}

Ring.prototype.checkEdges = function(){
	if (this.x >= width || this.x <= 0) this.xSpeed *= -1;
	if (this.y >= width || this.y <= 0) this.ySpeed *= -1;
}

