let player;
let bg;
let bR = 50;  // ball radius
let cS = 500; // canvas size
let fS = 500; // frame size
let floor;
let collision = [];
let ice_tile;
let snow_tile;
let rock_ice_tile;
let rock_snow_tile;
let top_right_corner;
let right_edge;
let top_edge;
let bottom_edge;
let left_edge;
let top_left_corner;

function setup() {
  ice_tile = loadImage('./tiles/ice_tile.png');
  snow_tile = loadImage('./tiles/snow_tile.png');
  rock_ice_tile = loadImage('./tiles/rock_ice_tile.png');
  rock_snow_tile = loadImage('./tiles/rock_snow_tile.png');
  top_right_corner = loadImage('./tiles/top_right_corner.png');
  right_edge = loadImage('./tiles/right_edge.png');
  top_edge = loadImage('./tiles/top_edge.png');
  bottom_edge = loadImage('./tiles/bottom_edge.png');
  top_left_corner = loadImage('./tiles/top_left_corner.png');
  left_edge = loadImage('./tiles/left_edge.png');
  createCanvas(cS, cS);
  floor = lvlOne;
  bg = new Floor;
  player = new Player;
}

function draw() {
  bg.update();
  bg.render();
  player.render();

  if (keyIsDown(LEFT_ARROW)) {
    bg.move(1, 0);
  }
  if (keyIsDown(UP_ARROW)) {
    bg.move(0, 1);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    bg.move(-1, 0);
  }
  if (keyIsDown(DOWN_ARROW)) {
    bg.move(0, -1);
  }
}

// function keyPressed() {
//   if (keyCode === 32) {
//     bg.move(0, 0);
//   }
//   if (keyCode === 37) {
//     bg.move(1, 0);
//   }
//   if (keyCode === 38) {
//     bg.move(0, 1);
//   }
//   if (keyCode === 39) {
//     bg.move(-1, 0);
//   }
//   if (keyCode === 40) {
//     bg.move(0, -1);
//   }
// }

// function keyPressed() {
//   if (keyIsDown(LEFT_ARROW)) {
//     bg.move(1, 0);
//   }
//   if (keyIsDown(UP_ARROW)) {
//     bg.move(0, 1);
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     bg.move(-1, 0);
//   }
//   if (keyIsDown(DOWN_ARROW)) {
//     bg.move(0, -1);
//   }
// }
