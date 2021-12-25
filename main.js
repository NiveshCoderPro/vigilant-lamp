song = "";


function preload() {
  song = loadSound("music.mp3");
}


function setup() {
  canvas = createCanvas(500,500);
  video = createCapture(VIDEO);
  canvas.center();
 video.hide();

  posenet = ml5.poseNet(video);
  
}

function draw() {
image(video , 0 ,0,500,600);
}


function play() {
  song.play();
}