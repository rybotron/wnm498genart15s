// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com



var sound;
var amp;
var fft;
var accum = 0;
var osc;
var x;
var y;
var outsideRadius = 150;
var insideRadius = 100;

// Preload the sound file
function preload(){
    sound = loadSound("audio/inmotion.wav");

}

function setup(){
    createCanvas( windowWidth, windowHeight );
    sound.play();
    circleRGBA = color(10, 200, 180, 100);

    x = width/2;
    y = height/2;

    // Start playing the sound
    osc = new p5.TriOsc(); // set frequency and type
    osc.amp(.5);

    fft = new p5.FFT();
    osc.start();
    

    amp = new p5.Amplitude(1);
    amp.setInput(sound);

    fft = new p5.FFT();
    fft.setInput(sound);
}

function draw() {

    background( 0 );

    var level = amp.getLevel();
    accum +=  level / 20;

    var n = map( noise(accum), 0, 1, 0, width );


    stroke(5, 255, 20 );
    strokeWeight(level * 300);
    line( n, 0, n, height);


    stroke(5, 255, 20 );
    strokeWeight(level * 500);
    line( n, 0, n, height);


      var numPoints = map(mouseX, 0, width, 6, 60);
      var angle = 0;
      var angleStep = 180.0/numPoints;

       var t = floor( sound.currentTime() ) % 5;
    accum += level;

    switch( t ){
        case 0:
        
            break;
        case 1:
            background(color( random( 100, 255), random( 100, 255), random( 100, 255), random( 100, 255) ));
            ellipse( random(0, width), random(0, height), level*100, level* 500);
            var pos = map(noise(accum), 0, 5, 0, width );
            ellipse( pos, pos, level*1000, level* 500);
            break;
        case 2:
           ellipse( width / 2, height / 2, level*500, level* 500);
            ellipse( width / 2, height / 2, -level*500, -level* 500);
            break;
            
        case 3:
             stroke( random(0, width), random(0, height), level*500, level*500 );
             strokeWeight(level * 500);
    line( n, 0, n, height);
            break;

        case 4:
            background(color( random( 100, 255), random( 100, 255), random( 100, 255), random( 100, 255) ));
            break;

            push();
            translate(width / 2, height / 2);
            rectMode(CENTER);
            rotate(-accum / 2);
            noFill(0);
            rect(0,0, 10, 250);
            pop();

           

            push();
           
            pop();

            break;


    }
  endShape();



}

















