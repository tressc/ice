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
      console.log(collision);
    }
  }

  findCollision(vX, vY) {
    let { pX, pY } = this.playerLocation;

    while (vX !== 0) {
      pX -= vX;
      if (floor.level[pY][pX] === 2 || floor.level[pY][pX] === undefined) {
        return [pX, pY];
      }
    }

    while (vY !== 0) {
      pY -= vY;
      if (!floor.level[pY] || floor.level[pY][pX] === 2) {
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


  drawOOB() {
    let { oX, oY } = this.origin;

    let height = floor.level.length * 50;
    let width = floor.level[0].length * 50;

    if (oX < 0) {
      fill('brown');
      rect(width - (0 - oX), 0, 0 - oX, 500);
    }
    if (oX > 0) {
      fill('brown');
      rect(0, 0, oX, 500);
    }
    if (oY < 0) {
      fill('brown');
      rect(0, height - (0 - oY), 500, 0 - oY);
    }
    if (oY > 0) {
      fill('brown');
      rect(0, 0, 500, oY);
    }
  }


  render() {
    let { oX, oY } = this.origin;
    this.drawOOB();
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
              let color = colors[tile];
              fill(color);
              rect(0, 0, 50, 50);
            pop();
          }
        pop();
      }
    pop();
  }
}
