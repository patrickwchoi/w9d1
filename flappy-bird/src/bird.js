const CONSTANT = {
  GRAVITY: 0.8,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30
};


export default class Bird {
  static get GRAVITY() { return 0.5; }
  // Can either have constant outside of class
  // OR

  constructor(dimensions) {
    this.dimensions = dimensions;
    this.velocity = {x:0, y:0}
    this.position = {x: dimensions.width / 3,
                     y: dimensions.height / 2};
  }

  drawBird(ctx){
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.position.x, this.position.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
  }

  animate(ctx){
    this.move()
    this.drawBird(ctx);
  }

  move(){
    this.y += this.velocity.y;
    this.velocity.y = Math.max(CONSTANTS.TERMINAL_VEL, this.velocity.y + CONSTANTS.GRAVITY);

  }

  flap(){
    this.velocity.y = CONSTANTS.FLAP_SPEED;
  }
}
