function setup() {
  createCanvas(windowWidth,windowHeight);

  background("#000BD0");
  
}

function draw() {
  
  
  //fill(0);
  fill(255);
  //noStroke(0);
  stroke(0);
  strokeWeight(4);
 
  
  
  if(mouseIsPressed == true)
    {
      
      rect(mouseX,mouseY,100,60);
      //rect(mouseX,mouseY,random(100,30) );
      //circle(mouseX,mouseY,90);
    //text("ERROR: YOUR PRIVACY NOT FOUND",width/2.3,height/2.3)
      textSize(30);
      //xt("ERROR: YOUR PRIVACY NOT FOUND",width/2.3,height/2.1);
    text("ERROR 404: YOUR PRIVACY NOT FOUND",width/3,height/4);
                                            
    }



}
