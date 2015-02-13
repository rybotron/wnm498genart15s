
var r, g, b;

function setup(){ //only setup once
	createCanvas(windowWidth,windowHeight);
	r = random(255);
	g = random(255);
	b = random(255);

}
function draw() { //continuously draw and render every frame
	background(0);

	// strokeWeight(2);
	// stroke(50); //my guide vertial
	// line(50, 0, 50, height);
	// line(100, 0, 100, height);
	// line(150, 0, 150, height);
	// line(200, 0, 200, height);
	// line(250, 0, 250, height);
	// line(300, 0, 300, height);
	// line(350, 0, 350, height);
	// line(400, 0, 400, height);
	// line(450, 0, 450, height);
	// line(500, 0, 500, height);
	// line(550, 0, 550, height);
	// line(600, 0, 600, height);
	// line(650, 0, 650, height);
	// line(700, 0, 700, height);
	// line(750, 0, 750, height);
	// line(800, 0, 800, height);
	// line(850, 0, 850, height);
	// line(900, 0, 900, height);
	// line(950, 0, 950, height);
	// line(1000, 0, 1000, height);
	// line(1050, 0, 1050, height);
	// line(1100, 0, 1100, height);
	// line(1150, 0, 1150, height);
	// line(1200, 0, 1200, height);
	// line(0, 50, width, 50);//my guide horizontal
	// line(0, 100, width, 100);
	// line(0, 150, width, 150);
	// line(0, 200, width, 200);
	// line(0, 250, width, 250);
	// line(0, 300, width, 300);
	// line(0, 350, width, 350);
	// line(0, 400, width, 400);
	// line(0, 450, width, 450);
	// line(0, 500, width, 500);
	// line(0, 550, width, 550);
	// line(0, 600, width, 600);
	// line(0, 650, width, 650);
	// line(0, 700, width, 700);
	// line(0, 750, width, 750);
	// line(0, 800, width, 800);

	noStroke(); // red peak
	fill(238,39,36);
	triangle(200,300,275,325,250,350);
	triangle(200,370,250,325,250,355);
	// triangle(x1,y1,x2,y2,x3,y3);

	ellipseMode(CORNER); // head
	stroke(85,180,130);
	strokeWeight(20);
	fill(0,0,0);
	ellipse(250, 317, 60, 60);

	stroke(85,180,130);// Neck
	strokeWeight(20);
	line(310, 350, 310, 500);

	rectMode(CORNER); //nect rectangle
	noStroke();
	fill(85,180,130);
	rect(300, 420, 100, 80);

	ellipseMode(CORNER); // Neck black subtrack shape
	noStroke();
	fill(0);
	ellipse(320, 350, 150, 150);
	
	ellipseMode(CORNER); // body
	noStroke();
	fill(85,180,130);
	arc(300, 400, 200, 200, 0, PI);

	ellipseMode(CORNER); // body
	noStroke();
	fill(85,180,130);
	arc(300, 400, 200, 200, 0, PI);

	stroke(85,180,130);
	strokeWeight(20);
	line(500, 450, 500, 500); // tail1
	line(500, 500, 550, 450); // tail2
	line(500, 500, 550, 500); // tail3

	ellipseMode(CORNER); // wing red circle - 1
	noStroke();
	fill(238,39,36);
	ellipse(450, 440, 15, 15);
	rectMode(CORNER); //wing rectangle - 1
	noStroke();
	fill(238,39,36);
	rect(430, 440, 30, 15);

	ellipseMode(CORNER); // wing red circle - 2
	noStroke();
	fill(238,39,36);
	ellipse(450, 470, 15, 15);
	rectMode(CORNER); //wing rectangle - 2
	noStroke();
	fill(238,39,36);
	rect(430, 470, 30, 15);

	ellipseMode(CORNER); // wing red circle - 3
	noStroke();
	fill(238,39,36);
	ellipse(450, 500, 15, 15);
	rectMode(CORNER); //wing rectangle - 2
	noStroke();
	fill(238,39,36);
	rect(430, 500, 30, 15);

	ellipseMode(CORNER); // wing red circle - 4
	noStroke();
	fill(238,39,36);
	ellipse(450, 530, 15, 15);
	rectMode(CORNER); //wing rectangle - 2
	noStroke();
	fill(238,39,36);
	rect(430, 530, 30, 15);

// wing middle fill part
	rectMode(CORNER); //wing rectangle - big red
	noStroke();
	fill(238,39,36); //red
	rect(400, 440, 50, 105);

	rectMode(CORNER); //wing rectangle - small red 1
	noStroke();
	fill(238,39,36); //red
	rect(340, 500, 60, 20);

	rectMode(CORNER); //wing rectangle - small red 2
	noStroke();
	fill(238,39,36); //red
	rect(364, 520, 60, 25);

	ellipseMode(CORNER); // wing upper quarter big arc
	noStroke();
	fill(238,39,36);
	arc(340, 440, 120, 120, PI, PI+HALF_PI);

	ellipseMode(CORNER); // wing lower quarter small arc
	noStroke();
	fill(238,39,36);
	arc(340, 490, 55, 55, HALF_PI, PI);


// negative shape
	ellipseMode(CORNER); // wing black circle - 1
	noStroke();
	fill(0);
	ellipse(442, 455, 15, 15);

	ellipseMode(CORNER); // wing black circle - 2
	noStroke();
	fill(0);
	ellipse(442, 485, 15, 15);

	ellipseMode(CORNER); // wing green circle - 3
	noStroke();
	fill(85,180,130);//green
	ellipse(442, 515, 15, 15);

	
	ellipseMode(CORNER); // ball
	noStroke();
	fill(r,g,b,256);
	ellipse(130, 315, 40, 40);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 150, 335);
  print(d);
  if (d < 20) {
    // Pick new random color values
    // r = random(); // pick a value between 0-1
    // r = random(200,255);
    r = random(255);
    g = random(255);
    b = random(255);
  }
  // console.log("pressed " + true);
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
	background(0);
}

