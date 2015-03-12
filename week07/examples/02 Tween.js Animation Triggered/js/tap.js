
function Tap( duration ){
	this.location = createVector( random( 100, width - 100 ), random( 100, height - 100 ) );
	this.fillColor = color( random(100, 255), random(100, 255), random(100, 255));
	this.strokeColor = color( random(100, 255), random(100, 255), random(100, 255));
	this.strokeWeight = random( 5, 50 );
	this.diameter = 0;
	this.tweening = false;
}

Tap.prototype.animate = function( diameter, time ){

	// Reset the diameter to 0
	this.diameter = 0;

	// Create Tween on this object
	var tweenIn = new TWEEN.Tween(this);

	// Assign tween to diameter for a set milliseconds of time
	tweenIn.to( diameter, time );

	// Use probability to determine which Tween curve is used
	var r = random();
	if ( r < .35 ){
		tweenIn.easing( TWEEN.Easing.Sinusoidal.InOut );
	}else if (r >= .35 < .65 ){
		tweenIn.easing( TWEEN.Easing.Quadratic.Out );
	}else{
		tweenIn.easing( TWEEN.Easing.Bounce.Out );
	}

	// When tween starts do this...
	tweenIn.onStart( function(){
		this.tweening = true;
		print("Tween Start");
	});

	// While tweening do this...
	tweenIn.onUpdate( function(){});

	// When tween ends do this...
	tweenIn.onComplete( function(){
		this.tweening = false;
		print("Tween Complete");
		this.diameter = 0;
	})

	// Start the tween
	tweenIn.start();
}

Tap.prototype.display = function(){
	fill( this.fillColor )
	stroke( this.strokeColor );
	strokeWeight( this.strokeWeight );
	ellipse( this.location.x, this.location.y, this.diameter, this.diameter );
}