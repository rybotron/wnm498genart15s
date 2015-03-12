/*

music:   Clocks 
artist:  Faultline.
album:   Your Love Means Everything
year:    2004

*/

var music;
var rot=0,reverse_rot=0;
var theMil=0;
var red;
var blue;
var sun =[];
var star =[];
var met =[];
var met2 =[];
var fft =[];
var lc1,lc2,lc3;

function preload(){
	soundFormats('mp3');
	music = loadSound('audio/Clocks.mp3');

}
function setup(){
	createCanvas(windowWidth,windowHeight);
	music.play();
	fft = new p5.FFT();
	sun = new Sun(200);
	star = new Star(20);
	star.updatePos();
	star2 = new Star(20);
	star2.updatePos();
	met = new Meteor(200,30);
	met2 = new Meteor(50,0);
	lc1 = color(100,0,0);
	lc2 = color(255,150,0);
	lc3 = color(127,67,255);
}

function draw(){
	
	var spectrum = fft.analyze(); 
	var highFreq = fft.getEnergy("treble");
	var metPos = (width/2)*1.5;
	var m = millis();
	var scene1 = 18250;
	var scene2 = 35250;
	var scene3 = 52500;
	var scene4 = 69500;
	var scene5 = 78000;
	var scene6 = 85000;
	var scene7 = 186000;

	if((m > 0 && m < scene1)||(m > scene2 && m < scene3)||(m > scene4 && m < scene5)||(m > scene6 && floor(m/1000)%11 < 6)|| m > scene7){  // sun no rotate
		background(10,5,150);

		// sky

		blue = 150;
		noStroke();
		for(i=0;i<150;i++){
			fill(10,5,blue);
			ellipse(width/2,height/2,(width-(i*4))*1.25,(height-(i*4))*1.75);
			blue -= 1;
		}

		// lightning bolts

		if(highFreq > 120){
			fill(201,253,240,150);
			noStroke();
			var a = random(width);
			var b = random(width);
			quad(a,0,a+random(100),0,b,height,b-random(100),height);
		}

		// stars

		star.appear();
		star.fall();
		star.updatePosWithIndex(star.checkDisappear());	

		if(m>scene4){
			
			// waveform

  			var waveform = fft.waveform();
  			noFill();
  			beginShape();
  			for (var i = 0; i< waveform.length; i++){
    			var x = map(i, 0, waveform.length, 0, width);
    			var y = map( waveform[i], 0, 255, 0, height);
    			vertex(x,y);
			}
			endShape();

		}

		if(m<scene6){

			// sun
			
			push();
				translate(width/2,height/2);
				for(var i=0;i<spectrum.length;i++){//	
					sun.rayAppear(i,180,540,spectrum[i],lc1,lc2,1);
					if(m>35000){
						sun.rayAppear(i,541,901,spectrum[i],lc1,lc2,1);
					}
				}
			pop();
		}
		
		if(m>=scene6){ // sun + rotating
	
			// sun ray

			sun.rayRotateCW(1,spectrum,0,360,lc1,lc2,1,1);
			sun.rayRotateCC(2,spectrum,361,721,lc1,lc2,2,1);
			sun.rayRotateCW(3,spectrum,722,1024,lc1,lc2,5,2);
		}

		if(m> scene7){  // crashing meteor
			if(met2.isCrashed()){
				met2.disappear();
			}
			else{
				push();
					translate(width/2,height-(height*1.25));
					rotate(-45);
					met2.appear();
					met2.fall(30);
				pop();
			}
		}

		if(m>scene7+4000 && m <= scene7+10000){  // sun exploding
			lc1 = color(0,0,0);
			lc2 = color(20,10,205);
			sun.rayExpand(30);
			sun.shrink(5);
			sun.update(0,0,0,0);
		}
		else if(m>scene7+10000){  // sun exploding more
			sun.rayRandom = true;
			sun.sw = 2;
			sun.size += 5;
			if(sun.size > width){
				sun.opac -= 1;
				if(sun.opac <= 0){
					sun.sw -= 0.5;
				}
			}
		}

		// sun surface

		red = highFreq+100;
		if(fft.getEnergy(1,1024) === 0 ){
			red--;
		}
		else{
			if(red>220){
				red = 220;
			}
			sun.appear(red,0.7);
			for(i=red;i>0;i--){
				sun.update(i,red,0.3,i);
			}
		}
	}	

	else if((m >= scene1 && m <= scene2)||(m >= scene3 && m <= scene4)||(m >= scene5 && m <= scene6)||(m > scene6 && m < scene7)){  // meteor scene
		background(0,0,150);
		blue = 150;
		noStroke();
		for(i=0;i<150;i++){
			fill(10,5,blue);
			ellipse((width/2)/2,height/2,((width/2)-(i*2))*1.5,(height-(i*4))*1.75);
			blue -= 1;
		}

		star2.appearInMotion();
		star2.move();
		star2.updatePosLeftWithIndex(star2.checkDisappear());
		var xx = noise( millis() / 5000 );
  		var nx = map(xx, 0, 1, 0, (width/2) );
		met.appear();
		met.updatePos(nx)
		met.updateParticlePosWithIndex(met.checkDisappear());
		met.particle();
		met.particleMove();
	}
}

// ********** Sun class **********

function Sun(size){
	this.size = size;
	this.rot = [0,0,0];
	this.h = 100;
	this.sw = 1;
	this.opac = 255;
	this.rayRandom = false;
}

Sun.prototype.appear = function(red,multiplier){	
	fill(red*multiplier,0,0,this.opac);
	noStroke();
	ellipse(width/2,height/2,this.size,this.size);
}

Sun.prototype.update = function(counter,red,multiplier,size){	
	fill(counter-(red*multiplier),0,0,this.opac);
	noStroke();
	ellipse(width/2,height/2,size,size);
}

Sun.prototype.rayAppear = function(counter,minFreq,maxFreq,h,c1,c2,addDegree){
	angleMode(DEGREES);
	strokeWeight(this.sw);
	push();		
		rotate(counter*addDegree);
		if(counter > minFreq && counter <= maxFreq){
			if(this.rayRandom == true)
				stroke(random(255),random(255),random(255));
			else{
				stroke(lerpColor(c1,c2,counter/(maxFreq-minFreq)));
			}
			line(0,this.size-(this.size/2),0,h+this.h);
		}
	pop();
}

Sun.prototype.rayRotateCW = function(rotIndex,spectrum,minFreq,maxFreq,c1,c2,rotSpeed,addDegree){
	push();	
		translate(width/2,height/2);
		rotate(this.rot[rotIndex-1]);
		this.rot[rotIndex-1] += rotSpeed;
		for(var i=0;i<spectrum.length;i++){
			//this.rayAppear(i,minFreq,maxFreq,spectrum[i],lerpColor(c1,c2, i / (maxFreq -  minFreq)),addDegree);
			this.rayAppear(i,minFreq,maxFreq,spectrum[i],c1,c2,addDegree);
		}
	pop();
}

Sun.prototype.rayRotateCC = function(rotIndex,spectrum,minFreq,maxFreq,c1,c2,rotSpeed,addDegree){
	push();	
		translate(width/2,height/2);
		rotate(this.rot[rotIndex-1]);
		this.rot[rotIndex-1] -= rotSpeed;
		for(var i=0;i<spectrum.length;i++){
			//this.rayAppear(i,minFreq,maxFreq,spectrum[i],lerpColor(c1,c2, i / (maxFreq -  minFreq)),addDegree);
			this.rayAppear(i,minFreq,maxFreq,spectrum[i],c1,c2,addDegree);
		}
	pop();
}

Sun.prototype.rayExpand = function(speed){
	this.h += speed;
	this.sw += 0.1;
}

Sun.prototype.shrink = function(speed){
	if(this.size <= 0){
		this.size = 0;
	}
	else{
		this.size -= speed;
	}

}

// ********** Meteor class **********

function Meteor(size,particleAmount){
	this.size = size;
	this.x = width/2;
	this.y = height/2;
	this.px = new Array(particleAmount);
	this.py = new Array(particleAmount);
	this.particleAmount = particleAmount;
	this.parOpac = new Array(particleAmount);
	this.speed = new Array(particleAmount);
	this.mil = new Array(particleAmount);
	this.parSize = new Array(particleAmount);
	this.firstTimeFlag = true;
}

Meteor.prototype.appear = function(){
	
	noStroke();
	fill(150,0,0,random(100,255));
	triangle(this.x,this.y-(this.size/2),this.x,(this.y+this.size/2),this.x+random(this.size+(this.size*0.5),this.size+(this.size*0.75)),this.y);
	fill(200,0,0);
	triangle(this.x,this.y-(this.size/2),this.x,this.y,this.x+(this.size*0.75),(this.y-(this.y/4))+random(10));
	triangle(this.x,this.y,this.x,this.y+(this.size/2),this.x+(this.size*0.75),this.y+(this.y/4)-random(10));
	triangle(this.x,this.y-(this.size/2),this.x,(this.y+this.size/2),this.x+(this.size*1.25),this.y);
	ellipse(this.x,this.y,this.size,this.size);
	var g = 0;
	var r = 200;
	for(i=this.size-50;i>0;i--){
		fill(r,g,0);
		ellipse(this.x,this.y,i,i);
		g += random(3);
	}
}

Meteor.prototype.updatePos = function(pos){
	this.x = pos;
}

Meteor.prototype.fall = function(speed,stop){
	this.x -= speed;
}

Meteor.prototype.disappear = function(){
	this.size = 0;
}

Meteor.prototype.isCrashed = function(){
	if(this.x <= 0 - ((width/2)/2)){
		return true;
	}
}

Meteor.prototype.particlePos = function(){
	for(i=0;i<this.particleAmount;i++){
		this.px[i] = this.x;
		this.py[i] = random(this.y-50,this.y+50);
		this.speed[i] = random(10,15); 
		this.parSize[i] = random(10,40);
	}
}

Meteor.prototype.setFirstTime = function(){
	this.firstTimeFlag = true;
}

Meteor.prototype.updateMil = function(currentMil){
	for(i=0;i<this.particleAmount;i++){
		this.mil[i] = random(currentMil+100,currentMil+4000);
		console.log("now = " + millis() + " ,mil = " + this.mil[i]);
	}
}

Meteor.prototype.checkDisappear = function(){
	for(i=0;i<this.particleAmount;i++){
		if (this.px[i] > width) {			
			return i;
		}
	}
}

Meteor.prototype.updateParticlePosWithIndex = function(i){
	this.px[i] = this.x;
}

Meteor.prototype.particle = function(){
	if(this.firstTimeFlag == true){
		this.particlePos();
		this.updateMil(millis());
		console.log("first time");
		this.firstTimeFlag = false;
	}
	stroke(255,this.parOpac);
	strokeWeight(1);
	fill(255,0);
	for(i=0;i<this.particleAmount;i++){
		if(this.isReady(i)){
			quad(this.px[i],this.py[i],this.px[i]+this.parSize[i],this.py[i]+this.parSize[i],this.px[i]+(this.parSize[i]*2),this.py[i],this.px[i]+this.parSize[i],this.py[i]-this.parSize[i]);
		}
	}
}

Meteor.prototype.particleMove = function(){
	if(this.firstTimeFlag == false){
		for(i=0;i<this.particleAmount;i++){
			if(millis() > this.mil[i]){
				this.px[i] += this.speed[i];
				this.parOpac[i] -= 5;
			}
		}
	}
}

Meteor.prototype.isReady = function(i){
	if(millis() >= this.mil[i]){
		return true;
	} else {
		return false;
	}

}


// ********** Star class **********

function Star(amount){
	this.x = new Array(amount);
	this.y = new Array(amount);
	this.xSpeed = new Array(amount);
	this.ySpeed = new Array(amount);
	this.amount = amount;
	this.sOpac = 255;
	this.size  = new Array(amount);
	this.so = 150;
}

Star.prototype.appear = function(){
	for(i=0;i<this.amount;i++){
		var sw = random(5);
		this.so = random(100,200);
		stroke(255,this.so);
		strokeWeight(sw);
		fill(255,255,255,this.sOpac);
		ellipse(this.x[i],this.y[i],this.size[i],this.size[i]);
	}
}

Star.prototype.updatePos = function(){
	this.sOpac = 255;
	for(i=0;i<this.amount;i++){
		this.x[i] = random(width);
		this.y[i] = random(height);
		this.size[i] = 5;
	}
	for(i=0;i<this.amount;i++){
		this.xSpeed[i] = (random(10))-5;
		this.ySpeed[i] = (random(10))-5;
	}
}

Star.prototype.fall = function(){
	for(i=0;i<this.amount;i++){
		this.x[i] += this.xSpeed[i];
		this.y[i] += this.ySpeed[i]; 
	}
}

Star.prototype.checkDisappear = function(){
	for(i=0;i<this.amount;i++){
		if (this.x[i] < 0 || this.x[i] > width || this.y[i] < 0 || this.y[i] > height) {
			return i;
		}
	}
}

Star.prototype.updatePosWithIndex = function(i){
	this.x[i] = random(width);
	this.y[i] = random(height);
	this.size[i] = 5;
}

Star.prototype.updatePosLeftWithIndex = function(i){
	this.x[i] = random((width/2)/2);
	this.y[i] = random(height);
	this.size[i] = 5;
}

Star.prototype.appearInMotion = function(){
	for(i=0;i<this.amount;i++){
		var sw = random(5);
		var so = random(100,200);
		stroke(255,so);
		strokeWeight(sw);
		fill(255,255,255,this.sOpac);
		rect(this.x[i],this.y[i],100,1);
	}
}

Star.prototype.move = function(){
	for(i=0;i<this.amount;i++){
		this.x[i] += (this.xSpeed[i]) +25;
	}	
}


