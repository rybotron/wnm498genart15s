
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
var ctrls;
var gui;
var pos;

// Preload the sound file
function preload(){
    // sound = loadSound("audio/real.mp3");
    soundFormats("mp3", "ogg");
    sound = loadSound("audio/real.mp3");
}

function setup(){
    createCanvas( windowWidth, windowHeight );
    sound.play();

    pos = createVector(width / 2, height / 2);

    amp = new p5.Amplitude(.25);
    amp.setInput(sound);

    fft = new p5.FFT(.95, 16);
    fft.setInput(sound);

    ctrls = {
        level: 0.0001,
        accum: 0.0001,
        multiplier: 1
    };

    gui = new dat.GUI();
    var g = gui.addFolder("Controls");
    g.add( ctrls, "level", 0, 1).name("Level").listen();
    g.add( ctrls, "accum").name("Accumulator").listen();
    g.add( ctrls, "multiplier", 0, 100).name("Multiplier");
    g.open();

}

function draw() {

    background( 255 );
    level = amp.getLevel();
    spectrum = fft.analyze();

    ctrls.level = level;
    ctrls.accum += level * ctrls.multiplier;

    fill(0);
    ellipse(pos.x, pos.y, spectrum[1], spectrum[1]);

    pos.x = ctrls.accum;

    if( pos.x > width ) ctrls.accum = 0;

}

















