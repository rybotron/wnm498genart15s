function Basketball(){
	this.radius = 100;
	this.color  = color(255, 150, 0);
	Ball.call(this, this.radius, this.color);
}

Basketball.prototype = Object.create(Ball.prototype);

Basketball.prototype.constructor = Basketball;

Basketball.prototype.update = function(){
	this.checkEdges();
	this.x += this.xSpeed * 2;
  this.y += this.ySpeed * 2;
}

Basketball.prototype.wiggly = function(){
	this.x += random(10,20);
	this.y += random(10,20);
}
