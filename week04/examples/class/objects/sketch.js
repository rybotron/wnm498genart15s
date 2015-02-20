var ball;
var ballTwo;

function setup(){
  createCanvas(windowWidth, windowHeight);

  ball = {
    name: "soccer",
    color: color(255,0,0),
    x: width / 2,
    y: height / 2,
    xSpeed: 10,
    ySpeed: 15,
    radius: 50,
    draw: function(){
      fill(this.color);
      ellipse(this.x, this.y, this.radius, this.radius);
    },
    update: function(){
      // this.checkEdges();
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    },
    checkEdges: function(){
      if( this.x >= width || this.x <= 0) this.xSpeed *= -1;
      if( this.y >= height || this.y <= 0) this.ySpeed *= -1;
    }
  };

  ballTwo = {
    name: "Basketball",
    x: width / 2,
    y: height / 2,
    xSpeed: 5,
    ySpeed: 10,
    radius: 200,
    draw: function(){
      ellipse(this.x, this.y, this.radius, this.radius);
    },
    update: function(){
      // this.checkEdges();
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    },
    checkEdges: function(){
      if( this.x >= width || this.x <= 0) this.xSpeed *= -1;
      if( this.y >= height || this.y <= 0) this.ySpeed *= -1;
    }
  };

  ballThree = {
    name: "racketball",
    x: width / 2,
    y: height / 2,
    xSpeed: 50,
    ySpeed: 20,
    radius: 10,
    draw: function(){
      ellipse(this.x, this.y, this.radius, this.radius);
    },
    update: function(){
      // this.checkEdges();
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    },
    checkEdges: function(){
      if( this.x >= width || this.x <= 0) this.xSpeed *= -1;
      if( this.y >= height || this.y <= 0) this.ySpeed *= -1;
    }
  };
}

function draw(){
  background(0);

  ball.update();
  ball.checkEdges();
  ball.draw();

  ballTwo.update();
  ballTwo.checkEdges();
  ballTwo.draw();
  
  ballThree.update();
  ballThree.checkEdges();
  ballThree.draw();
}













































