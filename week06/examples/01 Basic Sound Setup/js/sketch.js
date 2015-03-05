// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com



var sound;
var amp;
var fft;
var accum = 0;

// Preload the sound file
function preload(){
    sound = loadSound("audio/real.mp3");
}

function setup(){
    createCanvas( windowWidth, windowHeight );
    circleRGBA = color(10, 200, 180, 100);

    // Start playing the sound
    sound.play();

    amp = new p5.Amplitude( .8 );
    amp.setInput(sound);

    fft = new p5.FFT();
    fft.setInput(sound);
}

function draw() {

    background( 255 );
    var level = amp.getLevel();
    var specturm = fft.analyze();


}

















