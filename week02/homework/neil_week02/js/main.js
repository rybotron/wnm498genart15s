function setup(){
	createCanvas(800,600);
	background(0,18,53);
}

function draw(){
	var mnr=209,mng=184,mnb=0;
	var str=255,stg=255,stb=255;
	var bgr=0,bgg=18,bgb=53;
	var bdr=25,bdg=2,bdb=38;
	var pbr=38,pbg=0,pbb=0;
	var wdr=208,wdg=184,wdb=0;
	var ufo=255;
	if(mouseIsPressed){
		mnr=252,mng=108,mnb=79;
		bgr=215,bgg=228,bgb=249;
		bdr=68,bdg=68,bdb=68;
		pbr=95,pbg=221,pbb=14;
		wdr=255,wdg=255,wdb=255;
		str=bgr,stg=bgg,stb=bgb;
		ufo=50;
	}

	background(bgr,bgg,bgb);
	// stars	
	for(var i = 0;i<100;i++){
		var x = Math.floor((Math.random() * 800) + 1);
		var y = Math.floor((Math.random() * 600) + 1);
		push();
			translate(x,y);
			noStroke();
			fill(str,stg,stb);
			ellipse(0,0,2,2);
		pop();
	}

	var d = new Date();
	var sec = d.getSeconds();
	
	// moon
	push();
		translate(sec*13,100);
		noStroke();
		fill(mnr,mng,mnb);
		ellipse(0,0,80,80);
	pop();

	// buildings
	push();
		translate(0,400);
		noStroke();
		fill(bdr,bdg,bdb);
		rect(0,0,100,800);
	pop();

	push();
		translate(100,250);
		noStroke();
		fill(bdr,bdg,bdb);
		rect(0,0,150,800);
	pop();

	push();
		translate(250,350);
		noStroke();
		fill(bdr,bdg,bdb);
		rect(0,0,150,800);
	pop();

	push();
		translate(700,300);
		noStroke();
		fill(bdr,bdg,bdb);
		rect(0,0,150,800);
	pop();

	// pyramid building
	push();
		translate(450,700);
		noStroke();
		fill(pbr,pbg,pbb);
		triangle(0,0,200,0,100,-600);
	pop();

	// windows
	push();
		translate(300,370);
		noStroke();
		fill(wdr,wdg,wdb);
		rect(0,0,30,50);
	pop();

	push();
		translate(350,370);
		noStroke();
		fill(wdr,wdg,wdb);
		rect(0,0,30,50);
	pop();

	push();
		translate(120,270);
		noStroke();
		fill(wdr,wdg,wdb);
		rect(0,0,30,50);
	pop();

	push();
		translate(170,270);
		noStroke();
		fill(wdr,wdg,wdb);
		rect(0,0,30,50);
	pop();

	push();
		translate(20,420);
		noStroke();
		fill(wdr,wdg,wdb);
		rect(0,0,30,50);
	pop();

	push();
		translate(720,320);
		noStroke();
		fill(wdr,wdg,wdb);
		rect(0,0,30,50);
	pop();

	push();
		translate(550,400);
		noStroke();
		fill(wdr,wdg,wdb);
		rect(0,0,30,50);
	pop();

	push();
		translate(mouseX,mouseY);
		fill(ufo);
		noStroke();
		ellipse(0,0,80,20);
		ellipse(0,0,40,40);
	pop()
}