
function setup() {
    
    var myCanvas =  createCanvas(800, 250);
    noStroke();
    background(200);
    myCanvas.parent(mySketch);
}

function draw() {
    fill(random(0,255),random(0,255),random(0,255));
    var brushSize = 20;
    if (mouseIsPressed) {
    rect(mouseX, mouseY, brushSize, brushSize);
    }else {
    ellipse(mouseX, mouseY, brushSize, brushSize);
    }
}
function mousePressed() {
    background(random(200, 255));
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(mouseX, mouseY, brushSize*2, brushSize*2);
}
