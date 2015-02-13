// var cSpace = 50;
// var rSpace = 50;

function setup(){ //only setup once
	createCanvas(windowWidth,windowHeight);
	r = random(255);
	g = random(255);
	b = random(255);

	var a = [1,2,3,4,5,6,7,8,9,10];
	for( var k = 0; k < a.length; k++ ){
		a.pop();
		print (a);
	}

}
function draw() { //continuously draw and render every frame
	background(0);

	// add one to i
	// i = i + 1;
	// i += 1;
	// i++;

	stroke(255);
	for( var i = 0; i < width; i += 50 ){
		line(i, 0, i, height );
	}
	for( var j = 0; j < height; j += 50){
		line( 0, j, width, j);
	}




	// 1st iteration of the loop
	// width = 500;
	// var i = 0;
	// Is i < width? Yes.
	// Run statements line(i,0,i,height);
	// line(0,0,0,1080);

	// i++

	// 2nd iteration of the loop
	// i < width? Yes 1 < 500
	// Run Statments line(i,0,i,height);



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


}


