class Background {
  constructor() {
    this.origin = {oX: 0, oY: 0};
    this.vel = {vX: 0, vY: 0};
    this.speed = 12;
  }

  move(vX, vY, stopping) {
    if (this.isStopped() || stopping) {
      this.vel = { vX, vY};
    }
  }

  update() {
    let { oX, oY } = this.origin;
    let { vX, vY } = this.vel;

    let slowX = this.slow(oX, vX);
    let slowY = this.slow(oY, vY);

    vX = vX * this.speed + slowX;
    vY = vY * this.speed + slowY;

    this.origin = {
      oX: oX + vX,
      oY: oY + vY,
    };

    this.stopIfCollision(slowX, slowY);
  }

  stopIfCollision(x, y) {
    if (Math.abs(x) === this.speed || Math.abs(y) === this.speed) {
      this.move(0, 0, true);
    }
  }

  isStopped() {
    return this.vel.vX === 0 && this.vel.vY === 0;
  }

  slow(pos, vel) {
    let result = 0;
    let newPos = pos + vel * this.speed;

    if (newPos > (fS / 2 - bR / 2)) { // left || top
      result = (fS / 2 - bR / 2) - newPos
    } else if (newPos < (fS / 2 - bR / 2) * -1) { // right || bottom
      result = ((fS / 2 - bR / 2) * -1) - newPos
    }

    return result;
  }

  render() {
    let { oX, oY } = this.origin;
    translate(oX, oY)
    strokeWeight(1);
    stroke('red');
    noFill();
    rect((cS - fS) / 2, (cS - fS) / 2, fS, fS);
    fill(150);
    noStroke();
  }
}
