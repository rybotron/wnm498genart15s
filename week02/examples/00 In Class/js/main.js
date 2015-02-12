

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0); // 0 - range RGB RGBA Grayscale
	// background(255, 0, 0);
	// background(0, 255, 0, 125);
	
}

function draw(){
	background(0);

	// push();
	// 	translate( width / 2, height / 2 );
	// 	angleMode(DEGREES);
	// 	rotate(90);
	// 	rectMode(CENTER);
	// 	rect(0,0,200,500);
	// pop();

	// push();
	// 	translate(width / 2, height / 2);
	// 	fill(255,0,0);
	// 	ellipse(0, 0, 50, 50);
	// pop();

	var a = 1;
	var b = 0;
	if( a > b ){
		// print("I'm awesome" + " " + a);

	}

	if ( mouseIsPressed || touchIsDown ){

		strokeWeight(10);
		stroke(0);
		ellipse(mouseX, mouseY, 50, 50);
		ellipse(mouseX, mouseY, 250, 250);
	}else{
		fill(255,0,0);
		ellipse(mouseX, mouseY, 10, 10);
	}

	// translate(width / 2, height / 2);
	stroke(255);
	line(mouseX, mouseY, width / 2 , height /2);


	// noStroke();
	// rectMode(CENTER);
	// rect(width / 2, 50, width, 100);

	// rectMode(CORNER);
	// strokeWeight(10);
	// stroke(0,0,255);
	// fill(100, 200, 30);
	// rect(0, 100, width, 100);

	// noStroke();
	// ellipse(500, 500, 50, 50);

}

// window.onresize = function(){
// 	myCanvas.resize(windowWidth, windowHeight);
// 	background(0);
// }

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	background(0);
}

