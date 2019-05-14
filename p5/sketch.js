let bgImg;
let ballSprite;
let paddelImg;

function preload() {
  bgImg = loadImage('Images/space.jpg');
  ballSprite = loadImage('Images/ball.png');
  paddelImg = loadImage('Images/paddel.png');
}

function setup() {
  let canvas = createCanvas(1920, 1000);
  canvas.position(20, 20);
  ball = new Ball();
  paddel = new Paddel();
}

function draw() {
  background(0);
  image(bgImg, 0, 0, width, height);
  ball.update();
  paddel.update();
  ball.show();
  paddel.show();
  ball.checkEdges();
  if (ball.checkCollisions(paddel)) {
    ball.vy *= -1;
  }
}

class Ball {
  constructor() {
    this.x = floor(random() * width);
    this.y = floor(random() * height);
    this.width = 100;
    this.height = 100;
    this.vx = 10;
    this.vy = 10;
  }
  show() {
    fill(250, 250, 0);
    ellipse(this.x, this.y, 30, 30);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
  checkEdges() {
    100
    if (this.x >= width || this.x <= 0) {
      this.vx = -this.vx;
    }
    else if (this.y <= 0 + ball.height / 2) {
      this.vy = -this.vy;
    }
  }
  checkCollision(object)  {
    return (this.x + this.width / 2 > object.x && this.x + this.width / 2 < object.x + object.width &&
      this.y + this.height > object.y && this.y < object.y + object.height)
        this.vy *= -1;
  }
  
}

class Paddel {
  constructor() {
    this.x = width / 2;
    this.y = height - 20;
    this.width = paddelImg.width;
    this.height = paddelImg.heigth;
    this.icon = paddelImg;
  }
  show() {
    image(this.icon, this.x, this.y, this.width, this.height);
  }

  update() {
    if (keyIsPressed) {
      if (keyCode == 39) {
        this.x += 20;
      }
      if (keyCode == 37) {
        this.x -= 20;
      }
    }
  }
}