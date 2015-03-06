// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com



var sound;
var amp;
var fft;
var level;
var spectrum;
var accum = 0;

// Preload the sound file
function preload(){
    // sound = loadSound("audio/real.mp3");
    soundFormats("mp3", "ogg");
    sound = loadSound("audio/real.mp3");
}

function setup(){
    createCanvas( windowWidth, windowHeight );
    sound.play();

    amp = new p5.Amplitude(.95);
    amp.setInput(sound);

    fft = new p5.FFT(.95, 16);
    fft.setInput(sound);
}

function draw() {

    background( 255 );
    level = amp.getLevel();
    spectrum = fft.analyze();

    fill(0);
    ellipse(width /2, height /2, spectrum[1], spectrum[1]);

    for( var i =0; i < spectrum.length; )

}

















