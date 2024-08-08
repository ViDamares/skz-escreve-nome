function setup() {
    createCanvas(600, 400);
    background("white")
  }
  
  function draw() {
    
    stroke("black"); 
    fill("pink");
    
    //console.log(mouseIsPressed)
    
     if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
     }
    }