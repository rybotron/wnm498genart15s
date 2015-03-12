var sound;
var amp;
var fft;
var accum = 0;
var n;

var tileCount = 20,
  ringAlpha,
  ringColor;

function preload(){
	soundFormats("mp3");
	sound = loadSound ("audio/Water_me.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sound.play();
  amp = new p5.Amplitude(.30);
  amp.setInput(sound);

  fft = new p5.FFT(.10, 1024);
  fft.setInput(sound);

}

function draw() {
  background(0,15);

  level = amp.getLevel();
  spectrum = fft.analyze();

  t = floor( sound.currentTime() );

  n = map( noise(accum), 0, 1, 0, width );

  var waveform = fft.waveform();

if ( t >= 0 && t < 11 ){
  noFill();
  stroke( 17, 243, 246, 15 );
  strokeWeight(level * 200);
  ellipse( width /2, height /2, 450, 450);
  //smallest
push();
  stroke( 17, 243, 246, 25 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, 50, 50);
pop();
}

else if(t >= 11 && t < 24 ){

noFill();
beginShape();
stroke(245,0,196,55); 
strokeWeight(level * 15);
for ( var i = 0; i < waveform.length; i++){
    var x = map (i, 0, waveform.length, 0, width);
    var y = map(waveform[i], 0, 255, 0, height);
    vertex(x,y);
} 
endShape();
} 
else if(t >= 24 && t < 28){
  noFill();
  stroke( 0, 91, 127 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, 400, 400);
}
else if(t >= 28 && t < 36){
  noFill();
  stroke( 0, 116, 107 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, 100, 100);
}
else if(t >= 36 && t < 43){ //rotor
  noFill();
  push();
  stroke( 146, 39, 143, 15 );
  strokeWeight(level * 800);
  ellipse( width /2, height /2, 400, 400);
  pop();
   stroke( 146, 39, 143, 30 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, 100, 100);

}
else if(t >= 43 && t < 60){
    push();
    noFill();
  stroke( 0, 96, 168 );
  strokeWeight(level * 10);
  ellipse( width /2, height /2, level * 20, level * 30);
  pop();
  noFill();
  stroke( 133, 96, 168 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, level * 600, level * 600);
}
else if(t >= 65 && t < 67){
  noFill();
  stroke( 196, 223, 155 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, level * 600, level * 600);
}

else if(t >= 79 && t < 80){
  noFill();
  stroke( 53, 177, 161 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, 50, 50);
}
else if(t >= 88 && t < 95){
  noFill();
  beginShape();
stroke(255, 192, 23,55); 
strokeWeight(level * 15);
for ( var i = 0; i < waveform.length; i++){
    var x = map (i, 0, waveform.length, 0, width);
    var y = map(waveform[i], 0, 255, 0, height);
    vertex(x,y);
} 
endShape();
  stroke( 75, 108, 191 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, 50, 50);
}
else if(t >= 108 && t < 111){
  noFill();
  stroke( 226, 212, 119 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, 50, 50);
}
else if(t >= 115 && t < 118){
  noFill();
  stroke( 226, 174, 119 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, level * 600, level * 600);
}
else if(t >= 125 && t < 132){
  noFill();
  stroke( 210, 169, 219 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, level * 600, level * 600);
}

else if(t >= 177 && t < 184){
  noFill();
  push();
  stroke( 255, 192, 23, 45 );
  strokeWeight(level * 100);
  ellipse( width /2, height /2, 300, 300);
  pop();
  push();
  stroke( 255, 192, 23, 20 );
  strokeWeight(level * 600);
  ellipse( width /2, height /2, 500, 500);
  pop();

  beginShape();
stroke(23, 203, 255, 40); 
strokeWeight(level * 10);
for ( var i = 0; i < waveform.length; i++){
    var x = map (i, 0, waveform.length, 0, width);
    var y = map(waveform[i], 0, 255, 0, height);
    vertex(x,y);
} 
endShape();
}

else {
  noFill();
  push();
  stroke( 17, 243, 246,45 );
  strokeWeight(level * 50);
  ellipse( width /2, height /2, 300, 300);
  pop();
  push();
  stroke( 17, 243, 246,30 );
  strokeWeight(level * 700);
  ellipse( width /2, height /2, 300, 300);
  pop();

  translate( width / tileCount / 2, height / tileCount / 2 );

  stroke( 240,0,243,10 );
  strokeWeight( level * 20 );

  for ( var gridY = 0; gridY < tileCount; gridY++ ) {
    for ( var gridX = 0; gridX < tileCount; gridX++ ) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      ellipse( posX, posY, 200, 200);
    }
  }

}

} //end draw




function mouseClicked(){
  sound.stop();
}