function Ball( radius ){
  this.x = random( 0, width );
  this.y = random( 0, height );
  this.xSpeed = random(-15, 15);
  this.ySpeed = random(-15, 15);
  this.radius = random(50, 100);
  this.color = color( random (255), random(255), random(255) );
}

Ball.prototype.update = function(){
  this.checkEdges();
  this.x += this.xSpeed;
  this.y += this.ySpeed;
}

Ball.prototype.draw = function(){
  fill(this.color);
  ellipse(this.x, this.y, this.radius, this.radius);  
}

Ball.prototype.checkEdges = function(){
  if( this.x >= width || this.x <= 0) this.xSpeed *= -1;
  if( this.y >= height || this.y <= 0) this.ySpeed *= -1;
}