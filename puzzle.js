let player;
let bg;
let bR = 50;  // ball radius
let cS = 700; // canvas size
let fS = 500; // frame size

function setup() {
  createCanvas(cS, cS);
  player = new Player;
  bg = new Background;
}

function draw() {
  background(0);
  player.render();
  bg.render();
  bg.update();
}

function keyPressed() {
  if (keyCode === 32) {
    bg.move(0, 0);
  }
  if (keyCode === 37) {
    bg.move(1, 0);
  }
  if (keyCode === 38) {
    bg.move(0, 1);
  }
  if (keyCode === 39) {
    bg.move(-1, 0);
  }
  if (keyCode === 40) {
    bg.move(0, -1);
  }
}
