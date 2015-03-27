function Ball( radius ){
  this.position = createVector( random( 0, width ), random( 0, height ) );
  this.velocity = createVector( random(-15, 15), random(-15, 15));
  this.radius = 50;
  this.color = color( random (255), random(255), random(255) );
  this.rotation = random(0, 360) * PI / 180;

  this.tweenDown = new TWEEN.Tween( this );
  this.tweenDown.to( { radius: 50 }, 250);



  this.tweenUp = new TWEEN.Tween( this );
  this.tweenUp.to( { radius: 500 }, 250)
              .easing(TWEEN.Easing.Elastic.Out)
              .onComplete( function(){
                this.tweenDown.start();
              });
              
}

Ball.prototype.update = function(){
  this.checkEdges();
  this.position.add(this.velocity);
}

Ball.prototype.draw = function(){
  fill(this.color);
  // push();
  ellipse(this.position.x, this.position.y, this.radius, this.radius); 

  // pop();
}

Ball.prototype.checkEdges = function(){
  if( this.position.x >= width || this.position.x <= 0) {
    this.velocity.x *= -1;
    this.tweenUp.start();
  }
  if( this.position.y >= height || this.position.y <= 0) { 
    this.velocity.y *= -1;
    this.tweenUp.start();
  }
}




























