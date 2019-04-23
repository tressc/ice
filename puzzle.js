let player;
let bg;
let bR = 50;  // ball radius
let cS = 500; // canvas size
let fS = 500; // frame size
let floor;
let collision = [];

function setup() {
  createCanvas(cS, cS);
  floor = lvlOne;
  bg = new Floor;
  player = new Player;
}

function draw() {
  bg.update();
  bg.render();
  player.render();
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
