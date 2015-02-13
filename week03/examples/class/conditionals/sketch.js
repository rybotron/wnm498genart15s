var isOverRectangle;
var bgColor;

function setup(){
  createCanvas(windowWidth, windowHeight);
  bgColor = color(100);

}

function draw(){
  background(bgColor);

  rectMode(CORNER);
 

  if( mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100){
    fill(0);
    rect(0,0,100,100);
  }else{
    fill(255);
    rect(0,0,100,100);
  }

  if(millis() > 1000 && millis() < 2000) ellipse(500,500,25,25);
  if(millis() > 2000 && millis() < 3000) rect(400,400,50,50);


  // print(millis());
  // ellipse(mouseX,mouseY,25,25);

}

function mousePressed(){
  // bgColor = color( random(255), random(255), random(255));
  console.log(true);
}

function keyPressed(){
  switch(key){
    case "A":
      print(key);
      break;
    case "B":
      print(key);
      break;
    case "C":
      print(key);
      break;
  }
}












































