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
var sun =[];
var star =[];

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
}

function draw(){
	background(10,5,35);
	//background(150,0,0);

	var spectrum = fft.analyze(); 
	var highFreq = fft.getEnergy("treble");
	
	// push();
	
 //  	translate(random(10),random(10));
	// stroke(0,0,80);

 //  	for(i=0;i<width*2;i++){
  		
 //    	var mountain = noise((i*0.001)/0.5, 0.5) *500;
 //    	line(i-(width/2),height+10,i,mountain+250);
    	
 // 	}
	// pop();

	// push();
	
 //  	translate(random(10),random(10));
	// stroke(0,0,50);

 //  	for(i=0;i<width*2;i++){
  		
 //    	var mountain = noise((i*0.001)/0.5, 0.5) *500;
 //    	line(i-(width/2),height+10,i,mountain+300);
    	
 // 	}
	// pop();

	// push();
	
 //  	translate(random(10),random(10));
	// stroke(120,0,0);

 //  	for(i=0;i<width*2;i++){
  		
 //    	var mountain2 = noise((i*0.001)/0.5, 0.5) *500;
 //    	line(i-(width/2),0,i,mountain2-250);
    	
 // 	}
	// pop();

	// push();
	
 //  	translate(random(10),random(10));
	// stroke(70,0,0);

 //  	for(i=0;i<width*2;i++){
  		
 //    	var mountain2 = noise((i*0.001)/0.5, 0.5) *500;
 //    	line(i-(width/2),0,i,mountain2-200);
    	
 // 	}
	// pop();
	
	// stars

	star.appear();
	star.fall();
	star.updatePosWithIndex(star.checkDisappear());	

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

	// sun ray

	var c1 = color(200,0,0);
	sun.rayRotateCW(1,spectrum,0,360,c1,1);
	var c2 = color(250,100,0);
	sun.rayRotateCC(2,spectrum,361,720,c2,2);
	var c3 = color(250,200,0);
	sun.rayRotateCW(3,spectrum,721,1024,c3,5);

	// sun
	
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
  	

	// lightning bolts

	if(highFreq > 120){
		fill(201,253,240,150);
		noStroke();
		var a = random(width);
		var b = random(width);
		quad(a,0,a+random(100),0,b,height,b-random(100),height);
	}
}

// ********** Sun class **********

function Sun(size){
	this.size = size;
	this.rot = [0,0,0];
}

Sun.prototype.appear = function(red,multiplier){	
	fill(red*multiplier,0,0);
	noStroke();
	ellipse(width/2,height/2,this.size,this.size);
}

Sun.prototype.update = function(counter,red,multiplier,size){	
	fill(counter-(red*multiplier),0,0);
	noStroke();
	ellipse(width/2,height/2,size,size);
}

Sun.prototype.rayAppear = function(counter,minFreq,maxFreq,h,color){
	angleMode(DEGREES);
	strokeWeight(1);
	push();		
		rotate(counter);
		if(counter > minFreq && counter <= maxFreq){
			stroke(color);
			line(0,this.size-(this.size/2),0,h+100);
		}
	pop();
}

Sun.prototype.rayRotateCW = function(rotIndex,spectrum,minFreq,maxFreq,color,rotSpeed){
	push();	
		translate(width/2,height/2);
		rotate(this.rot[rotIndex-1]);
		this.rot[rotIndex-1] += rotSpeed;
		for(var i=0;i<spectrum.length;i++){
			sun.rayAppear(i,minFreq,maxFreq,spectrum[i],color);
		}
	pop();
}

Sun.prototype.rayRotateCC = function(rotIndex,spectrum,minFreq,maxFreq,color,rotSpeed){
	push();	
		translate(width/2,height/2);
		rotate(this.rot[rotIndex-1]);
		this.rot[rotIndex-1] -= rotSpeed;
		for(var i=0;i<spectrum.length;i++){
			sun.rayAppear(i,minFreq,maxFreq,spectrum[i],color);
		}
	pop();
}


// ********** Star class **********

function Star(amount){
	this.x = new Array(amount);
	this.y = new Array(amount);
	this.xSpeed = new Array(amount);
	this.ySpeed = new Array(amount);
	this.amount = amount;
	this.sOpac = 255;
	//this.sColor = color(255,255,255,this.sOpac);
}

Star.prototype.appear = function(){
	for(i=0;i<this.amount;i++){
		var sw = random(5);
		var so = random(100,200);
		stroke(255,so);
		strokeWeight(sw);
		fill(255,255,255,this.sOpac);
		ellipse(this.x[i],this.y[i],5,5);
	}
}

Star.prototype.updatePos = function(){
	this.sOpac = 255;
	for(i=0;i<this.amount;i++){
		this.x[i] = random(width);
		this.y[i] = random(height);
		
	}
	for(i=0;i<this.amount;i++){
		this.xSpeed[i] = (random(10))-5;
		this.ySpeed[i] = (random(10))-5;
	}
}

Star.prototype.fall = function(){
	//var dim = 0.5;
	for(i=0;i<this.amount;i++){
		this.x[i] += this.xSpeed[i];
		this.y[i] += this.ySpeed[i];
		//this.sOpac -= dim; 
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
}


