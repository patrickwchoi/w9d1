import Bird from './bird';
import Level from './level';

export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate(lvl, brd) {
    lvl.animate(this.ctx);
    brd.animate(this.ctx);
  }

  restart() {
    let lvl = new Level(this.dimensions);
    let brd = new Bird(this.dimensions);
    this.animate(lvl, brd);
  }
}
