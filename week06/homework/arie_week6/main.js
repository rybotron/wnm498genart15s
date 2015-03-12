
var fft = [];

var dot = [];
    dotAmount= 0;

var circleOne, circleTwo = [];
    circleSize = 0;

var purple , pink ;

var wave = [];
    waveNum = 50;

var ctrl = {    //what this mean?
    vSpace: 100
};

var sound;
var accum = 0;


function preload(){
   sound = loadSound("enoe_-_Ice_shuffle.mp3");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  sound.play();

  pink = color(245,70,255);
  purple = color(40,25,45);
  blue = color(0,250,250);

  fft = new p5.FFT(0.95,16);
  amp = new p5.Amplitude( .5 );
  amp.setInput(sound);
  
  dot = new SnowDot(100); // what does the 100 mean?
  dot.randomPos();

  // for (var i = 0; i < 500; i++){
  //   dot.push( new SnowDot() );
  // }

  circleOne = new Circles();
  circleOne.show();

  circleTwo = new Circles();
  circleTwo.show();
}

function draw(){
  background(251,234,214);

  dotAmount = fft.analyze(); //returns length of array
  var level = amp.getLevel();
  var l = level * 10;
  accum += l ;

  // for (var i = 0; i < 500 ; i++){
  //   dot.show();
  // }
  
  var m = floor(sound.currentTime() );

  if ( m > 7 && m <= 19  || m >= 32 ){
    //------------------------------------------------ circleOne
    push();
    circleSize = fft.analyze();
    var diameter = map( circleSize[10], 0, 255, 300, 500 );
    stroke(pink);
    strokeWeight(circleSize[10]-80);
    circleOne.show( diameter );
    pop();
  }
  //------------------------------------------------ diagonal
  if ( m >= 20 && m <= 28){
    // var n = map( noise(accum), 0, 1, 0, width );
      push();
      fill( 255 );
      noStroke();
      shearX(PI/6.0);
      // rect ( n, 0 , n, height );
      rect ( width/2-250, 0 , 20 , level*2000 );
      pop();
  }
  //------------------------------------------------ diagonal 2
  if ( m >= 44 && m <= 73){
    // var n = map( noise(accum), 0, 1, 0, width );
      push();
      fill( 255 );
      noStroke();
      shearX(PI/6.0);
      // rect ( n, 0 , n, height );
      rect ( -300, 0 , level*2000 , height );
      pop();
  }

  //------------------------------------------------ snow
    dot.randomPos();
    dot.show( dotAmount[8] -70 );

  if ( m > 7 ){
    //------------------------------------------------ frequency wave
    push();
    var freq = fft.analyze();
    wave.unshift( freq );
    if ( wave.length >= waveNum){
      wave.pop();
    }

    // Offset the matrix
    var xGridSize = width / wave.length;
    
    translate( xGridSize / 2,  height / 1.5);
    stroke( blue, 0.5);
    strokeWeight( 5 );


    for(var i = 0; i < wave.length; i++){
    var yGridPos = map( i, 0, (wave.length - 1), -ctrl.vSpace, ctrl.vSpace);
          beginShape();
          for ( var j = 0; j < wave[i].length; j++ ) {
              var radius = xGridSize / 2;
              var xPos = xGridSize * i;
              var yPos = -wave[i][j] + yGridPos;
              vertex(xPos, yPos);
          }
          endShape();
    }
    pop();
  }

  //------------------------------------------------  diamond
  if ( m >= 14 && m <= 31 ){
    push();
    circleSize = fft.analyze();
    var d = map( circleSize[12], 0, 255, 10, 50 );
    noStroke();
    fill( pink );
    rectMode(CENTER);
    translate( width/4 , height/2);
    rotate(PI/4);
    rect( 0, 0, d,d );
    pop();
  }
  if ( m >= 15 && m <= 30 ){
    push();
    circleSize = fft.analyze();
    var d = map( circleSize[12], 0, 255, 20, 80 );
    noStroke();
    fill( purple );
    rectMode(CENTER);
    translate( width/2 , height/2);
    rotate(PI/4);
    rect( 0, 0, d,d );
    pop();
  }

  if ( m >= 16 && m <= 29 ){
    push();
    circleSize = fft.analyze();
    var d = map( circleSize[12], 0, 255, 10, 50 );
    noStroke();
    fill( pink );
    rectMode(CENTER);
    translate( width-width/4 , height/2);
    rotate(PI/4);
    rect( 0, 0, d,d );
    pop();
  }
  

  //------------------------------------------------sound pause and play
  if ( sound.isPlaying() ) {
    push();
    translate( 50, 50);
    fill(blue);
    noStroke();
    triangle( -10, 10, -10, -10, 6, 0);
    pop();
  } else {
    push();
    translate( 40, 50);
    fill(blue);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, 5, 15);
    rect(10, 0, 5, 15);
    pop();
  }
}


//---------------------------------------------------------------------------------------- Circles
function Circles(size){ 
this.x = width/2;     
this.y = height/2;
this.size = size;
}

Circles.prototype.show = function(size){
  push();
  noFill();
  ellipse(this.x, this.y, size, size);
  pop();
}

//---------------------------------------------------------------------------------------- mouse
function mousePressed() {
  if ( sound.isPlaying() ) { // .isPlaying() returns a boolean
  sound.pause();
  } else {
  sound.play(); // playback will resume from the pause position
  }
}

//---------------------------------------------------------------------------------------- SnowDot
function SnowDot(amount){ //create a class
 //what part will I change later?

 // this.x = random(width);  // why can't I use this?
 // this.y = random(height);
 this.x = [];
 this.y = [];
 this.size = 10;
 this.amount = amount;  // why the "amount" is in white color??
 // this.color =[ color(40,25,45), color(200,138,74) ] ;
 this.color = pink; 
 this.color2 = purple;
 // this.color = [ pink , purple] ; // why can't ?
}

SnowDot.prototype.show = function(amount){ // create a function for class
  for( i=0; i<amount ; i++){

    if( amount % 2 == 0 ){
    fill( this.color ); // this.color[0]
    noStroke();
    ellipse(this.x[i], this.y[i], this.size, this.size);
    }else{
    fill( this.color2 ); // this.color[1]
    noStroke();
    ellipse(this.x[i], this.y[i], this.size, this.size);
    }
    } 
}

SnowDot.prototype.randomPos = function(){ 
   for(i=0; i<this.amount; i++){
    this.x[i] = random(width);
    this.y[i] = random(height/2-100, height/2+100);
}
}  



//---------------------------------------------------------------------------------------- plan
// play music

// draw triangle
// triangle expand and spin
// triangle fade out

// draw circle
// circle with stroke expand
// stroke gets thin from center and disappear

// mouse clicke
// change the background color

// function DrawRect(){
//   // constructor
//   this.x = width/2;
//   this.y = height/2;
// }

// DrawRect.prototype.appear = function(){
//   rect(this.x,this.y,100,100);
// }

// DrawRect.prototype.move = function(speed){
//   this.x += speed;
// }

