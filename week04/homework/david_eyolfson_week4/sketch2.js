var notes = [];

var midis = [60, 62, 64, 65, 67, 69, 71, 72];

var prs;

var osc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for( var i = 0; i < 8; i++ ){
    notes.push( new Note() );
  }

  osc = new p5.SawOsc();
  osc.start();
  osc.amp(0);
}

function playNote(midis, duration ) {
  osc.freq(midiToFreq(midis));
  // Fade it in
  osc.fade(0.5,0.2);

  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {
  background(0);
    for( var i = 0; i < notes.length; i++ ){
    notes[i].update();
    notes[i].draw();
  }

    
  }


function Note(){
  this.x = 0;
  this.y = ((height / 8) * notes.length);
  this.color = 0;
  this.index = midis.index;
  this.play = notes.index;
}

Note.prototype.draw = function(){
  stroke(255);
  fill(this.color);
  rect(0, this.y, width, height / notes.length );
  
}

Note.prototype.update = function(){
 
  if ( this.y <= mouseY  && mouseIsPressed ){
    this.color = 255;
    playNote(this.play, 3 );
  }
  else{
    this.color = 0;
  };

  
}






























