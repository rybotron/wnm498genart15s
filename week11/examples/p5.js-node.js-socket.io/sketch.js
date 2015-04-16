// https://github.com/processing/p5.js/wiki/p5.js,-node.js,-socket.io


// Keep track of our socket connection
var socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://rybotron.com:8080');


  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('connect', function() {
    console.log("connected");
  });



  // When we recieve data...
  socket.on('mouse', function( data ) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      fill(0,0,255);
      noStroke();
      ellipse(data.x,data.y,80,80);
    }
  );


}


var touchMoved = mouseDragged = function () {

  fill(255);
  noStroke();

  var xPos = mouseX || touchX;
  var yPos = mouseY || touchY;

  ellipse( xPos, yPos, 80, 80);

  // Send the mouse coordinates
  // sendmouse( x, y );

  var data  = {
    x: xPos,
    y: yPos
  };
  socket.emit('mouse', data ); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}