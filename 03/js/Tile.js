class Tile {
  constructor(x, y, size, color, ctx) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotation = false;
    this.angle = Math.round(Math.random()) * (Math.PI / 2);
    this.ctx = ctx;
    this.bgColor = color;
  }

  updateAngle() {
    this.angle += Math.PI / 2;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);

    this.ctx.rotate(this.angle);

    // if (this.rotation) {
    //   this.angle += 1;
    // }
    // this.ctx.strokeStyle = "lightgrey";


    this.ctx.fillStyle = this.bgColor;
    this.ctx.beginPath();
    this.ctx.rect(0 - this.size / 2, 0 - this.size / 2, this.size, this.size);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
    //this.ctx.stroke();
  
    this.ctx.closePath();



    //
    // this.ctx.fillStyle = this.circleColor;

    this.ctx.strokeStyle = 'red';
    this.ctx.lineWidth = 30;
    this.ctx.beginPath();
    this.ctx.moveTo(0 - this.size / 2, 0 - this.size / 2);
    this.ctx.lineTo(0 - this.size / 2, 0 - this.size / 2);
    this.ctx.arc(
      0 - this.size / 2,
      0 - this.size / 2,
      this.size / 1.8,
      0,
      Math.PI / 2,
      false
    );
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
    this.ctx.closePath();

    //

    this.ctx.beginPath();
    this.ctx.moveTo(0 - this.size / 2, 0 - this.size / 2);
    this.ctx.lineTo(0 - this.size / 2, 0 - this.size / 2);
    this.ctx.arc(
      0 - this.size / 2,
      0 - this.size / 2,
      this.size / 2.25,
      0,
      Math.PI / 2,
      false
    );
    this.ctx.fillStyle = 'yellow';
    this.ctx.fill();
    this.ctx.closePath();
 




    this.ctx.beginPath();
    this.ctx.lineTo(this.size / 2, this.size / 2);
    this.ctx.arc(
      this.size / 2,
      this.size / 2,
      this.size / 1.8,
      Math.PI,
      -Math.PI / 2,
      false
    );
    this.ctx.fillStyle = 'red';
     this.ctx.fill();
    //this.ctx.stroke();
    this.ctx.closePath();

    //

    this.ctx.beginPath();
    this.ctx.lineTo(this.size / 2, this.size / 2);
    this.ctx.arc(
      this.size / 2,
      this.size / 2,
      this.size / 2.25,
      Math.PI,
      -Math.PI / 2,
      false
    );
    this.ctx.fillStyle = 'yellow';
    this.ctx.fill();
    this.ctx.closePath();



    
    this.ctx.restore();
  }
}
