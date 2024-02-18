function setup() {
  createCanvas(830,1500);

  //background("#000BD0");
  //background("#8FD20B");
  //background("#d1ee4c");
  
}

function draw() {
  
  
  fill(0);
  //fill(255);
  //noStroke(0);
  stroke(255);
  strokeWeight(0.5);
 
  
  
  if(mouseIsPressed == true)
    {
      
      //rect(mouseX,mouseY,100,60);
      rect(mouseX,mouseY, random (100,30) );
      //circle(mouseX,mouseY,90);
    }



}

function keyPressed()
{
  save("export.png");
  background(0);
  
}