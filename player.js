class Player {
  constructor() {
    this.vel = {x: 0, y: 0};
  }

  render() {
    fill('red');
    noStroke();
    ellipse(225, 225, 50);
  }
}
