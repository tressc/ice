class Player {
  constructor() {
    this.vel = {x: 0, y: 0};
  }

  render() {
    fill(255);
    noStroke();
    ellipse(350, 350, bR);
  }
}
