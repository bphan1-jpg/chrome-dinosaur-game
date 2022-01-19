class Birds {

  constructor() {
    this.r = 75;
    this.x = width;
    this.y = random(45,155);
  }

  move() {
    this.x -= 5;
  }

  show() {
    image(brImg, this.x, this.y, this.r, this.r);

  }

}
