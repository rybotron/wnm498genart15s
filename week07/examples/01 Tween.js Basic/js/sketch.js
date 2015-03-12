// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com
//

var agent;
var tween;
function setup(){
    createCanvas( windowWidth, windowHeight );
    // gives agent a positon 
    agent = createVector(width/2, height/2);

    // setting up our tween. telling our agent. TWEEN calls the library, .Tween makes a class
    // https://github.com/tweenjs/tween.js/tree/master
    tween = new TWEEN.Tween( agent );

    // using object literal notation
    tween.to( { x: width * .1, y: height *.1 }, 1000);

    // Puts easing on tween
    tween.easing( TWEEN.Easing.Exponential.InOut );
    // tween.onStart( function(){
    //     print(agent);
    // });
    // tween.onUpdate( function(){
    //    ellipse( width / 2, height / 2 ); 
    // })
    // tween.onComplete( function(){
    //     agent.x = 100;
    //     agent.y = 500;
    // });

    //tells tween to start. this is a method of our tween object 
    // tween.start(); 
    // agent = createVector(0, 0);

    // // tween.js
    // // https://github.com/sole/tween.js
    // //
    // // See tween graphs here:
    // // http://sole.github.io/tween.js/examples/03_graphs.html
    // var tween = new TWEEN.Tween( agent );
    // tween.to( { x: width, y: height }, 2000 );
    // tween.easing( TWEEN.Easing.Sinusoidal.InOut );
    // tween.start();
}

function draw(){

    background(255);
    // Update tween every frame. we're updating the entire library
    // Tween just affects numbers, then you can apply the numbers to shapes, rotations, scale
    strokeWeight(10);
    ellipse( agent.x, agent.y, 100, 100);
    TWEEN.update();
}

function mousePressed(){
    // Everytime we click the mouse it'll put it back to the center and start the tween again
   
    agent.x = width / 2;
    agent.y = height / 2;
    tween.start();
}