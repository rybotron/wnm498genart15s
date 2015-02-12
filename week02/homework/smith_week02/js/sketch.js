function setup() {
  createCanvas(1600, 800);
  background(204, 255, 255);  
}

function draw() {
//push()
//textSize(100);
//text("Holidays", 130, 300); 
//fill(0, 102, 153);
//text("Happy", 80, 160);
//pop()


ellipseMode(CENTER);

//noStroke();
//ellipse(26, 46, 55, 55);


//bottom body circle
noStroke()
ellipse(600, 530, 330, 330);

//middle body circle
ellipse(600, 350, 250, 250);

//head
ellipse(600, 150, 200, 200);

//eyes


fill(50);
ellipse(570, 130, 20, 20); //eye
fill(50);
ellipse(640, 130, 20, 20);//eye



//mouth
fill(50);
ellipse(650, 185, 12, 12);

fill(50);
ellipse(540, 180, 12, 12);

fill(50);
ellipse(555, 190, 12, 12);

fill(50);
ellipse(570, 195, 12, 12);

fill(50);
ellipse(590, 202, 12, 12);

fill(50);
ellipse(610, 202, 12, 12);

fill(50);
ellipse(630, 195, 12, 12);

fill(50);
ellipse(650, 185, 12, 12);




//buttons
fill(255, 0, 0);
ellipse(600, 270, 30, 30);

fill(255, 0, 0);
ellipse(600, 320, 30, 30);

fill(255, 0, 0);
ellipse(600, 370, 30, 30);


//nose

fill(255, 178, 102);
noStroke();
translate(550,110);

triangle(40, 60, 58, 20, 86, 75);


//arms
stroke(102, 51, 0);
strokeWeight(5);  // Thicker
line(-70, 200, -175, 380);
line(-70, 200, -175, 405);
line(-70, 200, -175, 470);




stroke(102, 51, 0);
strokeWeight(5);  // Thicker
line(170, 200, 255, 380);
line(170, 200, 255, 405);
line(170, 200, 255, 470);
translate(300,400);

//hat
fill(50);
noStroke();
rect(-345, -450, 190, 18);
rect(-315, -520, 130, 80);
tanslate(550,110);



}

