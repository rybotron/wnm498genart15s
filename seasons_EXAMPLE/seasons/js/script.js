
var grad;
var gradtwo;
var radsq;
var dia;
var winter;
var spring;
var MP;
var wo;
var fgrad;
var cloud;

// function preload(){
//  night = loadSound('../Sounds/ambient_night.mp3');
//  day = loadSound('../Sounds/birds.wav');

// };

function setup(){
	createCanvas(windowWidth, windowHeight);
	var canvas = document.getElementById('defaultCanvas');
	paper.setup(canvas);
	grad = paper.project.importSVG(document.getElementById('svg'));
	cloud = paper.project.importSVG(document.getElementById('cloud'));
	cloud.position.y = random(0, 200);
	cloud.accum = random( .25, 2);

	cloud2 = paper.project.importSVG(document.getElementById('cloud2'));
	cloud2.position.y = random(100, 400);
	cloud2.accum = random( 2, 4);

	cloud3 = paper.project.importSVG(document.getElementById('cloud3'));
	cloud3.position.y = random(200, 500);
	cloud3.accum = random( 1, 2);

	cloud4 = paper.project.importSVG(document.getElementById('cloud4'));
	cloud4.position.y = random(300, 600);
	cloud4.accum = random( .5, 3);

	cloud5 = paper.project.importSVG(document.getElementById('cloud5'));
	cloud5.position.y = random(100, 300);
	cloud5.accum = random( .5, 3);
    
    radsq = pow(windowWidth/2,2)+pow(windowHeight,2);
    dia = sqrt(radsq);

    grad.scale(dia*2);

    grad.position = new paper.Point(windowWidth/2,windowHeight);

    //spring
    spring = paper.project.importSVG(document.getElementById('spring'));

    spring.position = new paper.Point(windowWidth/2,windowHeight/1.3);

    //winter
    winter = paper.project.importSVG(document.getElementById('winter'));

    winter.position = new paper.Point(windowWidth/2,windowHeight/1.3);

};

function draw(){

 MP = map(mouseX, 0,width,0,1);

	grad.rotation += MP;


	fgrad = map(MP,0,1,0,1);

	if(winter.opacity <= .01){
		winter.opacity = fgrad * -1;
	};
	if(winter.opacity <= 1){
		winter.opacity = fgrad;
	};

	cloud.position.x += 6*MP + cloud.accum;
	if(cloud.position.x >= windowWidth){
		cloud.position.x=0
		cloud.position.y = random(0, 200);

	}

	cloud2.position.x += 2*MP + cloud2.accum;
	if(cloud2.position.x >= windowWidth){
		cloud2.position.x=0
		cloud2.position.y = random(100, 400);

	}

	cloud3.position.x += 3*MP + cloud3.accum;
	if(cloud3.position.x >= windowWidth){
		cloud3.position.x=0
		cloud3.position.y = random(200, 500);

	}

	cloud4.position.x += .4*MP + cloud4.accum;
	if(cloud4.position.x >= windowWidth){
		cloud4.position.x=0
		cloud4.position.y = random(100, 600);

	}

	cloud5.position.x += 3*MP + cloud5.accum;
	if(cloud5.position.x >= windowWidth){
		cloud5.position.x=0
		cloud5.position.y = random(100, 200);

	}


	paper.view.draw();




};

















