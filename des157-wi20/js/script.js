
function setup() {
    
    var myCanvas =  createCanvas(800, 250);
    noStroke();
    background(200);
    myCanvas.parent(mySketch);
}

function draw() {
    fill(random);
    var brushSize = 20;
    if (mouseIsPressed) {
    rect(mouseX, mouseY, brushSize, brushSize);
    }else {
    ellipse(mouseX, mouseY, brushSize, brushSize);
    }
}
function mousePressed() {
    background(random(200, 255));
    fill(0, 100, 100, 64);
    ellipse(mouseX, mouseY, brushSize*2, brushSize*2);
}
