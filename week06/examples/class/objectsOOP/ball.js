function Ball( radius ){
  this.position = createVector( random( 0, width ), random( 0, height ) );
  this.velocity = createVector( random(-15, 15), random(-15, 15));
  this.radius = random(5, 100);
  this.color = color( random (255), random(255), random(255) );
  this.r = random();
  this.rotation = random(0, 360) * PI / 180;
}

Ball.prototype.update = function(){
  this.checkEdges();
  this.position.add(this.velocity);
}

Ball.prototype.draw = function(){
  fill(this.color);
  // push();
  // rotate(this.rotation);
  if( this.r > .666 ){
    rect(this.position.x, this.position.y, this.radius, this.radius);
  }else if( this.r > .333 ){
    ellipse(this.position.x, this.position.y, this.radius, this.radius); 
  }else{
    triangle(this.position.x, this.position.y, this.position.x + 30, this.position.y + 50, this.position.x - 30, this.position.y + 50);
  }
  // pop();
}

Ball.prototype.checkEdges = function(){
  if( this.position.x >= width || this.position.x <= 0) this.velocity.x *= -1;
  if( this.position.y >= height || this.position.y <= 0) this.velocity.y *= -1;
}












