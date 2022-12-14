/**
 *  EASING REF:
 *  https://easings.net/#
 */

class App {
  constructor() {
    this.pixelRatio = window.devicePixelRatio || 1;
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth * this.pixelRatio;
    this.canvas.height = window.innerHeight * this.pixelRatio;
    this.canvas.style.width = window.innerWidth;
    this.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.setup();
  }

  setup() {
    this.circle = new Circle(10, 10, 50, this.ctx);
    this.eye = new Eye(10, 10, 50, this.ctx);
    document.addEventListener("click", this.click.bind(this));
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.circle.draw();
    this.eye.draw();
    requestAnimationFrame(this.draw.bind(this));
  }

  click(e) {
    if (this.circle.radius == 0) {
      this.time1 = 0
      this.time2 = 1000
    } else {
      this.time1 = 1000
      this.time2 = 0
    }

    setTimeout(() => {this.circle.resetAndGo(
      e.clientX * this.pixelRatio,
      e.clientY * this.pixelRatio
    )}, this.time1);

    setTimeout(() => {this.eye.resetAndGo(
      e.clientX * this.pixelRatio,
      e.clientY * this.pixelRatio
    )}, this.time2);
  }
}

window.onload = function () {
  new App();
};
