/*

inspiration from http://sysach.com/circle-game/

*/

var cometRight = [];
var cometLeft = [];
var ufo = [];
var mil = 2000;
var cAmount = 5;
var dieFlag = false;
var score = 0;

function setup(){
	createCanvas(windowWidth,windowHeight);
	ufo = new UFO();
	genComet(cometRight,cAmount);
	genComet(cometLeft,cAmount);
}

function draw(){
	background(15,0,80);
	
	// ray
	for(i=0;i<width;i += 2){
		stroke(random(180,200));
		line(i,0,width/2,height);
	}

	// pinky sun
	fill(255,50,50);
	stroke(255,50,50);
	strokeWeight(random(1,10));
	ellipse(width/2,height,width*0.2,width*0.2);

	ufo.appear();

	// if not crashed, generate more comets
    if(cometRight != undefined && cometLeft != undefined){
    	ufo.mousePosition();
		if(millis() > mil){
			console.log(millis() + "     " +mil);
			genComet(cometRight,cAmount);
			genComet(cometLeft,cAmount);
			mil += 2000;
		}
		callComet(cAmount);
	}

	// to check if the UFO is crashed by comets
  	if(dieFlag == false){
  		score = Math.round(millis()*0.01);
		for(i=0;i<cometRight.length;i++){
			cmtr = cometRight[i];
			cmtl = cometLeft[i];
			if(((cmtr.x - cmtr.r/2 <= mouseX + 60 && cmtr.x + cmtr.r/2 >= mouseX - 60) && (cmtr.y - cmtr.r/2 <= mouseY + 35 && cmtr.y + cmtr.r/2 >= mouseY - 35)) || ((cmtl.x - cmtl.r/2 <= mouseX + 60 && cmtl.x + cmtl.r/2 >= mouseX - 60) && (cmtl.y - cmtl.r/2 <= mouseY + 35 && cmtl.y + cmtl.r/2 >= mouseY - 35))){
				cometRight = undefined;
				cometLeft = undefined;
				dieFlag = true;
			}
		}
	}else{
		ufo.die();
		score = score;
		// noStroke();
		// fill(0,232,154);
		// textAlign(CENTER);
		// textSize(40);
		// text("CRASHED!!",width/2,height/2);
		// textSize(18);
		// text("press return to restart.",width/2,height/2 + 30);
	}
	
	// display score
	noStroke();
	fill(0,232,154);
	textSize(36);
	textAlign(RIGHT);
	text(score,width-10,50);
	
	if(keyCode === RETURN){
		console.log("return");
		location.reload();
	}
}

function genComet(name,amount){
	for(i=0;i<amount;i++){
		name[i] = new Comet();
	}
}

function callComet(amount){
	for(n=0;n<amount;n++){
		cometRight[n].appear();
		cometRight[n].fall(0);
	}
	for(n=0;n<amount;n++){
		cometLeft[n].appear();
		cometLeft[n].fall(1);
	}
}

function themeColor(){
	var myColor = [];
	myColor.push(color())
}

// ********** UFO class **********

function UFO(){
	//noStroke();
	noCursor();
	this.x = width / 2;
	this.y = height;
	this.w1 = 60;
	this.h1 = 70;
	this.w2 = 120;
	this.h2 = 30;
}

UFO.prototype.appear = function(){	
	noStroke();
	fill(83,24,105);
	ellipse(this.x,this.y,this.w1,this.h1);
	ellipse(this.x,this.y,this.w2,this.h2);
	stroke(random(255),random(255),random(255));
	strokeWeight(1);
	line(this.x - this.w2/2,this.y,this.x + this.w2/2,this.y);
}

UFO.prototype.mousePosition = function(){
	this.x = mouseX;
	this.y = mouseY;
}

UFO.prototype.die = function(){
	cursor();
	this.x = this.x;
	if(this.y < height){
		this.y += 10;
	}
}

// ********** Comet class **********

function Comet(){
	this.x = random(0,width);
	this.y = 0;
	this.r = random(20,40);
	this.xSpeed = random(5,10);
	this.ySpeed = random(10,15);
	this.color = color(0,random(220,245),random(140,160));
}

Comet.prototype.appear = function(){	
	fill(this.color);
	noStroke();
	ellipse(this.x,this.y,this.r,this.r);
}

Comet.prototype.fall = function(side){
	 switch(side){
	 	case 0: this.x += this.xSpeed; break;
	 	case 1: this.x -= this.xSpeed; break;
	 }
	this.y += this.ySpeed;
}
