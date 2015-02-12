// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//
// Using a for loop to draw a series of ellipses


var tileCount = 10;
var circleRGBA;


function setup(){
	createCanvas( windowWidth, windowHeight );
	circleRGBA = color(10, 200, 180, 180);
}

function draw() {

	background(255);

	var gridWidth = width / tileCount;
	translate( gridWidth / 2,  0 ); // Translate the entire matrix to center the ellipses

	noFill();
	stroke( circleRGBA );
	strokeWeight( 5 );

	var radius = gridWidth / 2;
	var posY = height / 2;

	ellipse( gridWidth * 0, posY, radius, radius);
	ellipse( gridWidth * 1, posY, radius, radius);
	ellipse( gridWidth * 2, posY, radius, radius);
	ellipse( gridWidth * 3, posY, radius, radius);
	ellipse( gridWidth * 4, posY, radius, radius);
	ellipse( gridWidth * 5, posY, radius, radius);
	ellipse( gridWidth * 6, posY, radius, radius);
	ellipse( gridWidth * 7, posY, radius, radius);
	ellipse( gridWidth * 8, posY, radius, radius);
	ellipse( gridWidth * 9, posY, radius, radius);

}