function Ball( radius, c ){
  this.x = random( 0, width );
  this.y = random( 0, height );
  this.xSpeed = 15;
  this.ySpeed = 10;
  this.radius = radius || random(5, 100);
  this.color = c || color( random (255), random(255), random(255) );
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
  push();
  // rotate(this.rotation);
  // if( this.r > .666 ){
  //   rect(this.x, this.y, this.radius, this.radius);
  // }else if( this.r > .333 ){
  //   ellipse(this.x, this.y, this.radius, this.radius); 
  // }else{
  //   triangle(this.x, this.y, this.x + 30, this.y + 50, this.x - 30, this.y + 50);
  // }
  ellipse(this.x, this.y, this.radius, this.radius);
  pop();
  
}

Ball.prototype.checkEdges = function(){
  if( this.x >= width || this.x <= 0) this.xSpeed *= -1;
  if( this.y >= height || this.y <= 0) this.ySpeed *= -1;
}