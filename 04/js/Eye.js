class Eye {
  constructor(x, y, radius, ctx) {
    this.position = { x: x, y: y };
    this.target = {
      x: x,
      y: y,
    };
    this.origin = {
      x: this.target.x,
      y: this.target.y,
    };

    this.originRadius = radius;
    this.targetRadius = radius;

    this.radius = radius;
    this.ctx = ctx;
    /*
      vitesse de d'incrémentation de t
    */
    this.speed = 0.01;
    /*
      t est un compteur qui va de 0 à 1
      qui definit la portion du chemin parcouru
    */
    this.t = 0;
  }

  draw() {

    if (Math.abs(this.targetRadius - this.radius) > 0.01) this.scale();
    else this.radius = this.targetRadius; //on force la position finale
    //check si on est arrivé à destination
    if (this.distance(this.position, this.target) > 0.001) this.move();
    
    // EYE 1

    this.ctx.fillStyle = "white";
    this.ctx.save();
    this.ctx.translate(this.position.x-10, this.position.y)-10;
    this.ctx.beginPath();
    this.ctx.arc(0-100, 0-100, this.radius/4, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.fillStyle = "black";
    this.ctx.save();
    this.ctx.translate(this.position.x-10, this.position.y)-10;
    this.ctx.beginPath();
    this.ctx.arc(0-100, 0-100, this.radius/7, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    // EYE 2

    this.ctx.fillStyle = "white";
    this.ctx.save();
    this.ctx.translate(this.position.x-10, this.position.y)-10;
    this.ctx.beginPath();
    this.ctx.arc(0+100, 0+100, this.radius/5, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    this.ctx.fillStyle = "black";
    this.ctx.save();
    this.ctx.translate(this.position.x-10, this.position.y)-10;
    this.ctx.beginPath();
    this.ctx.arc(0+100, 0+100, this.radius/8, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

  // EYE 3

  this.ctx.fillStyle = "white";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(0+170, 0-40, this.radius/7, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  this.ctx.fillStyle = "black";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(0+170, 0-40, this.radius/12, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

    // EYE 3

  this.ctx.fillStyle = "white";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(0+170, 0-40, this.radius/7, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  this.ctx.fillStyle = "black";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(0+170, 0-40, this.radius/12, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  // EYE 4

  this.ctx.fillStyle = "white";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(0-170, 0+40, this.radius/7, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  this.ctx.fillStyle = "black";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(0-170, 0+40, this.radius/12, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore()



  // EYE 5

  this.ctx.fillStyle = "white";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(0, 0, this.radius/7, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  this.ctx.fillStyle = "black";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(0, 0, this.radius/12, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore()


  // EYE 6

  this.ctx.fillStyle = "white";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(-70, 120, this.radius/5, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  this.ctx.fillStyle = "black";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(-70, 120, this.radius/10, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore()

  // EYE 7

  this.ctx.fillStyle = "white";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(70, -120, this.radius/5, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  this.ctx.fillStyle = "black";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(70, -120, this.radius/10, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore()

  // EYE 8


  // EYE 9

  this.ctx.fillStyle = "white";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(-25, -180, this.radius/10, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  this.ctx.fillStyle = "black";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(-25, -180, this.radius/20, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore()

  // EYE 10

  this.ctx.fillStyle = "white";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(180, 50, this.radius/10, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore();

  this.ctx.fillStyle = "black";
  this.ctx.save();
  this.ctx.translate(this.position.x-10, this.position.y)-10;
  this.ctx.beginPath();
  this.ctx.arc(180, 50, this.radius/20, 0, 2 * Math.PI);
  this.ctx.fill();
  this.ctx.closePath();
  this.ctx.restore()    
  }

   
  /**
   *
   *  remettre le compteur t à zero
   *  réinitialiser la position du point de départ
   *  assigner la nouvelle position de destination
   */
  resetAndGo(x, y) {
    this.t = 0;
    this.origin = {
      x: this.target.x,
      y: this.target.y,
    };
    this.target = {
      x,
      y,
    };

    this.originRadius = this.radius;
    if (this.radius == 0) {
      this.targetRadius = 30 + 200;
      this.speed = 0.01
    } else {
      this.targetRadius = 0;
      this.speed = 0.01
    }

  }


  scale() {
    //on incrémente t par la vitesse
    this.t += this.speed;
    //on calcule le facteur d'interpolation suivant le type de easing
    const ease = Easing.backInOut(this.t);

    //nouvelle position
    // on part de la position d'origine
    // on calcul la distance totale à parcourir (v2-v1)
    // on multiplie cette distance par le facteur d'interpolation
    // this.position.x = this.origin.x + (this.target.x - this.origin.x) * ease;
    // this.position.y = this.origin.y + (this.target.y - this.origin.y) * ease;
    this.radius = Math.abs(
      this.originRadius + (this.targetRadius - this.originRadius) * ease
    );

  }

  /**
   * function de calcul de l'animation
   */
  move() {
    //on incrémente t par la vitesse
    this.t += this.speed;
    //on calcule le facteur d'interpolation suivant le type de easing
    const ease = Easing.elasticOut(this.t);

    //nouvelle position
    // on part de la position d'origine
    // on calcul la distance totale à parcourir (v2-v1)
    // on multiplie cette distance par le facteur d'interpolation
    this.position.x = this.origin.x + (this.target.x - this.origin.x) * ease;
    this.position.y = this.origin.y + (this.target.y - this.origin.y) * ease;
  }

  /**
   * calcul de la distance entre deux points
   */
  distance(target, goal) {
    return Math.sqrt(
      Math.pow(target.x - goal.x, 2) + Math.pow(target.y - goal.y, 2)
    );
  }
}
