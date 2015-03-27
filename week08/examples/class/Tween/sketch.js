var agent;
var tweening = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  agent = createVector( width / 2, height / 2);

  var zero = createVector(0, 0);

  var myTweenThree = new TWEEN.Tween( agent );
  myTweenThree.to( {x: width / 2, y: 500 }, 2000);
  myTweenThree.easing(TWEEN.Easing.Elastic.InOut);
  myTweenThree.onComplete( function (){
    tweening = false;
  })

  var myTweenTwo = new TWEEN.Tween( agent );
  myTweenTwo.to( {x: width, y: 0 }, 2000);
  myTweenTwo.easing(TWEEN.Easing.Elastic.InOut);
  myTweenTwo.onComplete( function (){

    myTweenThree.start();
  })

  var myTween = new TWEEN.Tween( agent );
  // myTween.to( { x: 0, y: 0}, 1000 );
  myTween.to( zero, 1000 );
  myTween.easing( TWEEN.Easing.Bounce.Out );
  myTween.onStart( function(){
    tweening = true;
  }
  myTween.onUpdate( function(){
  })
  myTween.onComplete( function(){

    myTweenTwo.start();
  });

  myTween.start();
}

function draw(){
  background(150);
  // print(agent);
  ellipse(agent.x, agent.y, 50, 50);
  if( tweening ) rect(agent.x, agent.y, 100, 100);
  TWEEN.update();
}











































