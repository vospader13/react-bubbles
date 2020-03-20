var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var numStars = 2000;
var radius = 1;
var focalLength = canvas.width;

var centerX, centerY;

var stars = [], star;
var i;

var animate = false;

initializeStars();

function executeFrame(){
  if(animate)
    requestAnimationFrame(executeFrame);
  moveStars();
  drawStars();
}

function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;

    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}
let inc = 1;



function drawStars(){
  var pixelX, pixelY, pixelRadius;


  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }

  c.fillStyle = "black";
  c.fillRect(0,0, canvas.width, canvas.height);
  c.fillStyle = "red";
  for(i = 0; i < numStars; i++){
    star = stars[i];

    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = radius * (focalLength / star.z);

    c.beginPath();
    c.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI);
    c.fill();
  }
}

animate=true;

executeFrame()