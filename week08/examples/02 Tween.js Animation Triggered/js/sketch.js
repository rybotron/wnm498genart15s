// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com

var taps = [];
var sounds = [];


function preload(){
	for( var i = 1; i <= 10; i++ ){
		sounds.push( loadSound("audio/" + i.toString() + ".mp3") );
	}
}

function setup(){

	createCanvas( windowWidth, windowHeight );

	var numKeys = 10;
	while ( numKeys > 0 ){
		taps.push( new Tap( random( 250, 2000 ) ) );
		numKeys--;
	}
}

function draw(){
	background(255);

	for( var i = 0; i < taps.length; i++ ){
		taps[i].display();
	}

	TWEEN.update();
}


// keyTyped() is called once everytime a key is pressed but actions keys are ignored Command, CTRL, Shift, Alt
// the most recent key is passed to the key variable
// keyTyped()

function keyTyped(){

	// Stops currently playing sound, comment out if you want to overlay sounds
	for(var i = 0; i < sounds.length; i++ ){
		if ( sounds[i].isPlaying() ) sounds[i].stop();
		//print(sounds[i]);
	}

	switch ( key ){ // key contains the most recent key that was typed

		case "q":
			taps[0].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[0].play();
			break;
		case "w":
			taps[1].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[1].play();
			break;
		case "e":
			taps[2].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[2].play();
			break;
		case "r":
			taps[3].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[3].play();
			break;
		case "t":
			taps[4].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[4].play();
			break;
		case "y":
			taps[5].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[5].play();
			break;
		case "u":
			taps[6].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[6].play();
			break;
		case "i":
			taps[7].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[7].play();
			break;
		case "o":
			taps[8].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[8].play();
			break;
		case "p":
			taps[9].animate( {diameter: random(100,500)}, random(250, 1000) );
			sounds[9].play();
			break;
		default:
			break;

	}

}