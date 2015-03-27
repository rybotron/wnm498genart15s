var img;
var cloud;


function preload(){
	img = loadImage('gradtwo.svg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  var canvas = document.getElementById("defaultCanvas");
  paper.setup(canvas);
  cloud = paper.project.importSVG( document.getElementById("cloud"));
  cloud.setPosition( width / 2, height / 2);
}

function draw(){
  background(150);
  image(img, 0, 0);
  cloud.position.y += 1;
  // cloud.view.draw();
  // paper.view.update();
  // paper.view.draw();

}











































