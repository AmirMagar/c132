img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.dectect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results);
}


function draw() {
    image(img, 0, 0, 640, 420);
    fill(255, 0, 0);
    text("Dog", 45, 75);
    noFill();
    stroke(255, 0, 0);
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000")
    rect(300, 90, 270, 320 );
}