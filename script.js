//Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;

//animation Variable
let sunY = 260;
let skyColour = `rgb(229, 214, 229)`;
let stickBird1X1 = 90;
let stickBird1X2 = 115;
let stickBird1X3 = 140;
let stickBird2X1 = 30;
let stickBird2X2 = 55;
let stickBird2X3 = 80;
let stickBird3X1 = 150;
let stickBird3X2 = 175;
let stickBird3X3 = 200;
let triangle1X1 = 10;
let triangle1X2 = 30;
let triangle1X3 = 25;
let triangle2X1 = 140;
let triangle2X2 = 120;
let triangle2X3 = 125;
let rectangleX1 = 25;
let stickHead1X = 50;
let stickman1X = 50;
let stickman1X2 = 75;
let stickHead2X = 95;
let stickman2X = 95;
let stickman2X2 = 75;
let snowBallY = 90;

requestAnimationFrame(draw);
function draw() {
  //sky
  ctx.fillStyle = `${skyColour}`;
  ctx.fillRect(0, 0, 500, 400);

  //sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(225, sunY, 50, 0, 2 * Math.PI);
  ctx.fill();

  //water
  ctx.fillStyle = "#00CED1";
  ctx.fillRect(0, 300, 500, 100);

  //coastline
  ctx.fillStyle = "white";
  ctx.fillRect(0, 300, 500, 15);

  //Mountain 1
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(125, 100); //peak
  ctx.lineTo(0, 300);
  ctx.lineTo(250, 300);
  ctx.lineTo(125, 100);
  ctx.fill();

  //Mountain 2
  ctx.fillStyle = "darkgray";
  ctx.beginPath();
  ctx.moveTo(350, 50); //peak
  ctx.lineTo(500, 300);
  ctx.lineTo(200, 300);
  ctx.lineTo(350, 50);
  ctx.fill();

  //Mountain 3
  ctx.fillStyle = "darkgray";
  ctx.beginPath();
  ctx.moveTo(0, 70);
  ctx.lineTo(100, 300);
  ctx.lineTo(0, 300);
  ctx.lineTo(0, 50);
  ctx.fill();

  //Mountain 4
  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.moveTo(500, 100);
  ctx.lineTo(400, 300);
  ctx.lineTo(500, 300);
  ctx.lineTo(500, 100);
  ctx.fill();

  //Mountain 1 Snow
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(125, 100); //peak
  ctx.lineTo(169, 170);
  ctx.lineTo(80, 170);
  ctx.lineTo(125, 100);
  ctx.fill();

  //Mountain 2 Snow
  ctx.beginPath();
  ctx.moveTo(350, 50); //peak
  ctx.lineTo(392, 120);
  ctx.lineTo(307, 120);
  ctx.moveTo(350, 50);
  ctx.fill();

  //Mountain 2 snowball
  ctx.beginPath();
  ctx.arc(345, snowBallY, 15, 0, 2 * Math.PI);
  ctx.fill();

  //Boat
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(triangle1X1, 330);
  ctx.lineTo(triangle1X2, 350);
  ctx.lineTo(triangle1X3, 375);
  ctx.lineTo(triangle1X1, 330);
  ctx.fill();

  ctx.fillRect(rectangleX1, 350, 100, 25);

  ctx.beginPath();
  ctx.moveTo(triangle2X1, 330);
  ctx.lineTo(triangle2X2, 350);
  ctx.lineTo(triangle2X3, 375);
  ctx.lineTo(triangle2X1, 330);
  ctx.fill();

  //Stickman head 1
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(stickman1X, 325, 10, 0, 2 * Math.PI);
  ctx.stroke();

  //stickman torso 1
  ctx.beginPath();
  ctx.moveTo(stickman1X, 335);
  ctx.lineTo(stickman1X, 350);
  ctx.stroke();

  //Stickman arm 1
  ctx.beginPath();
  ctx.moveTo(stickman1X, 340);
  ctx.lineTo(stickman1X2, 348);
  ctx.stroke();

  //Stickman head 2
  ctx.lineWidth = 3;
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(stickman2X, 325, 10, 0, 2 * Math.PI);
  ctx.stroke();

  //stickman torso 2
  ctx.beginPath();
  ctx.moveTo(stickman2X, 335);
  ctx.lineTo(stickman2X, 350);
  ctx.stroke();

  //Stickman arm 2
  ctx.beginPath();
  ctx.moveTo(stickman2X, 340);
  ctx.lineTo(stickman2X2, 348);
  ctx.stroke();

  //Stick bird
  ctx.beginPath();
  ctx.moveTo(stickBird1X1, 35);
  ctx.lineTo(stickBird1X2, 40);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(stickBird1X2, 40);
  ctx.lineTo(stickBird1X3, 35);
  ctx.stroke();

  //Stickbird 2
  ctx.beginPath();
  ctx.moveTo(stickBird2X1, 25);
  ctx.lineTo(stickBird2X2, 30);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(stickBird2X2, 30);
  ctx.lineTo(stickBird2X3, 25);
  ctx.stroke();

  //stickbird 3
  ctx.beginPath();
  ctx.moveTo(stickBird3X1, 55);
  ctx.lineTo(stickBird3X2, 60);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(stickBird3X2, 60);
  ctx.lineTo(stickBird3X3, 55);
  ctx.stroke();

  //Title
  ctx.fillStyle = "black";
  ctx.font = "15px Arial";
  ctx.fillText("Lake Louise Date", 20, 20);

  //sunrise
  sunY = sunY - 1;
  if (sunY <= 100) {
    sunY = 100;
  }
  if (sunY == 200) {
    skyColour = "lightblue";
  }

  //birds moving
  stickBird1X1 += 0.75;
  stickBird1X2 += 0.75;
  stickBird1X3 += 0.75;
  stickBird2X1 += 1.5;
  stickBird2X2 += 1.5;
  stickBird2X3 += 1.5;
  stickBird3X1 += 1;
  stickBird3X2 += 1;
  stickBird3X3 += 1;

  //Boat moving
  if (rectangleX1 <= 200) {
    rectangleX1 = rectangleX1 + 1;
    triangle1X1 = triangle1X1 + 1;
    triangle1X2 = triangle1X2 + 1;
    triangle1X3 = triangle1X3 + 1;
    triangle2X1 = triangle2X1 + 1;
    triangle2X2 = triangle2X2 + 1;
    triangle2X3 = triangle2X3 + 1;
  }

  //stickman and woman moving
  if (stickman1X <= 225) {
    stickman1X = stickman1X + 1;
    stickman1X2 = stickman1X2 + 1;
    stickman2X = stickman2X + 1;
    stickman2X2 = stickman2X2 + 1;
  }

  //Avalanche
  snowBallY += 0.5;
  if (snowBallY == 300) {
    snowBallY = 90;
  }

  requestAnimationFrame(draw);
}
