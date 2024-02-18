function setup() {
  createCanvas(830, 1500);
  background("#000BD0");
}

function draw() {
  fill(255);
  stroke(0);
  strokeWeight(3
              );
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 100, 60);
    textSize(determineFontSize());
    text("ERROR 404: YOUR PRIVACY NOT FOUND", width / 3, height / 4);
  }
}

function determineFontSize() {
  // Determine appropriate font size based on screen size
  let fontSize;
  if (windowWidth > windowHeight) { // Landscape orientation (Desktop)
    fontSize = windowWidth / 50; // Adjust the division factor to suit your preference
  } else { // Portrait orientation (Mobile)
    fontSize = windowWidth / 20; // Adjust the division factor to suit your preference
  }
  return fontSize;
}
