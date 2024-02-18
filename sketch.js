function setup() {
  createCanvas(830, 1500);
  background("#000BD0");
}

function draw() {
  fill(255);
  stroke(0);
  strokeWeight(3);
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 100, 60);
    textSize(determineFontSize());
    text("ERROR 404: YOUR PRIVACY NOT FOUND", width / 2, height / 3);
  }
}

function determineFontSize() {
  // Determine appropriate font size based on canvas dimensions
  let fontSize;
  if (width > height) { // Landscape orientation (Desktop)
    fontSize = width / 50; // Adjust the division factor to suit your preference
  } else { // Portrait orientation (Mobile)
    fontSize = height / 20; // Adjust the division factor to suit your preference
  }
  return fontSize;
}
