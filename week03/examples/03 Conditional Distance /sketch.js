
// Example from Lauren McCarthy, Intro to Creative Programming @ RISD
// http://risd-creative-programming.github.io/fa13-introtocreativeprogramming/examples.html


var setup = function() {

	createGraphics(600, 400);
	noStroke();
	background(0, 150, 255);
	
};

var draw = function() {

	background(120);
	fill(255);

	ellipse(width/2, height/2, 200, 200);

	var d = dist(width/2, height/2, mouseX, mouseY);

	if (d < 100) {
	 fill(0);
	} else {
	 fill(200);
	}

	ellipse(mouseX, mouseY, 50, 50);

};

