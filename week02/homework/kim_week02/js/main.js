function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	translate(width /2, height /2);
	noStroke();

// Pinwheel stick
push(); //left
	rotate(45);
	stroke(229,195,195);
	strokeWeight(8);
	line(810,500,0,0);
pop();

push(); //right
	rotate(45);
	translate(5,0)
	stroke(208,154,153);
	strokeWeight(3);
	line(810,500,0,0);
pop();

	// if (mouseIsPressed){
	// rotate(frameCount / 100.0);
	// }else{
	// 	rotate(45);
	// }

// BLUE pinwheel flap
push();
	translate(0,-55);
push();	//top part of triangle
	translate(-30,-20);
	fill(185,220,222);
	triangle(30, 75, 30, 20, 130, 20);
pop();

push(); //bottom part of triangle
	rotate(PI); 
	translate(-130,-75);
	fill(138,182,192);
	triangle(30, 75, -30, 20, 130, 20);
pop();

pop();
// end BLUE pinwheel flap

// GREEN pinwheel flap
push();
	translate(0,55);
	rotate(PI);
push();	//top part of triangle
	translate(-30,-20);
	fill(222,236,211);
	triangle(30, 75, 30, 20, 130, 20);
pop();

push(); //bottom part of triangle
	rotate(PI); 
	translate(-130,-75);
	fill(183,200,184);
	triangle(30, 75, -30, 20, 130, 20);
pop();

pop();
// end GREEN pinwheel flap

// PURPLE & ORANGE pinwheel flaps
push();
	rotate(HALF_PI);

push(); // PURPLE pinwheel flap
	translate(0,-55);
push();	//top part of triangle
	translate(-30,-20);
	fill(228,207,169);
	triangle(30, 75, 30, 20, 130, 20);
pop();

push(); //bottom part of triangle
	rotate(PI); 
	translate(-130,-75);
	fill(210,184,132);
	triangle(30, 75, -30, 20, 130, 20);
pop();

pop();
// end PURPLE pinwheel flap

// ORANGE pinwheel flap
push();
	translate(0,55);
	rotate(PI);
push();	//top part of triangle
	translate(-30,-20);
	fill(222,210,219);
	triangle(30, 75, 30, 20, 130, 20);
pop();

push(); //bottom part of triangle
	rotate(PI); 
	translate(-130,-75);
	fill(187,165,180);
	triangle(30, 75, -30, 20, 130, 20);
pop();

pop();
//end ORANGE pinwheel flap
pop();
// end PURPLE & ORANGE pinwheel flaps

	fill(145,144,141);
	ellipse(0,0,20,20);
	fill(159,160,146);
	arc(0, 0, 20, 20, 0, PI);

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

