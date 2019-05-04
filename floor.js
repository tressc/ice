class Floor {
  constructor() {
    let [startY, startX] = floor.start;

    let oX = (4 - startX) * 50;
    let oY = (4 - startY) * 50;

    this.playerLocation = {pX: startX, pY: startY };
    this.origin = {oX, oY};
    this.velocity = {vX: 0, vY: 0};
    this.speed = 10;
  }

  move(vX, vY) {
    if (this.velocity.vX === 0 && this.velocity.vY === 0) {
      this.velocity = { vX, vY };
      collision = this.findCollision(vX, vY);
    }
  }

  findCollision(vX, vY) {
    let { pX, pY } = this.playerLocation;

    while (vX !== 0) {
      pX -= vX;
      if (floor.level[pY][pX] > 1 || floor.level[pY][pX] === undefined) {
        return [pX, pY];
      }
    }

    while (vY !== 0) {
      pY -= vY;
      if (!floor.level[pY] || floor.level[pY][pX] > 1) {
        return [pX, pY];
      }
    }
  }

  update() {
    let { oX, oY } = this.origin;
    let { vX, vY } = this.velocity;
    let { pX, pY } = this.playerLocation;

    if (pX - vX === collision[0] && pY - vY === collision[1]) {
      this.velocity = { vX: 0, vY: 0 };
      return;
    }

    let changeX = Number((vX * (this.speed / 50)).toFixed(1));
    let changeY = Number((vY * (this.speed / 50)).toFixed(1));
    let newX = Number((pX - changeX).toFixed(1));
    let newY = Number((pY - changeY).toFixed(1));

    this.playerLocation = {
      pX: newX,
      pY: newY
    };

    this.origin = {
      oX: oX + vX * this.speed,
      oY: oY + vY * this.speed,
    };
  }

  drawTile(type) {
    switch (type) {
      case 0:
        image(ice_tile, 0, 0, 50, 50);
        break;
      case 1:
        image(snow_tile, 0, 0, 50, 50);
        break;
      case 2:
        image(rock_ice_tile, 0, 0, 50, 50);
        break;
      case 3:
        image(rock_snow_tile, 0, 0, 50, 50);
        break;
      case 4:
        image(snow_tile, 0, 0, 50, 50);
        break;
      case 5:
        image(right_edge, 0, 0, 50, 50);
        break;
      case 6:
        image(top_right_corner, 0, 0, 50, 50);
        break;
      case 7:
        image(top_edge, 0, 0, 50, 50);
        break;
      case 8:
        image(bottom_edge, 0, 0, 50, 50);
        break;
      case 9:
        image(left_edge, 0, 0, 50, 50);
        break;
      case 10:
        image(top_left_corner, 0, 0, 50, 50);
        break;
      default:
        break;
    }
  }

  render() {
    let { oX, oY } = this.origin;
    noStroke();
    push();
      translate(oX, oY);
      for (let i = 0; i < floor.level.length; i++) {
        let row = floor.level[i];
        push();
          translate(0, i * 50);
          for (let j = 0; j < row.length; j++) {
            let tile = row[j];
            push();
              translate(j * 50, 0);
              this.drawTile(tile);
            pop();
          }
        pop();
      }
    pop();
  }
}
