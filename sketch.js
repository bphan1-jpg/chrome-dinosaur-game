let unicorn;
let uImg;
let tImg;
let bImg;
let trains = [];

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };

  uImg = loadImage('unicorn.png');
  tImg = loadImage('train.png');
  bImg = loadImage('background.jpg');
}

function mousePressed() {
  trains.push(new Train());
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    unicorn.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    unicorn.jump();
  }
}

function draw() {
  
  if (random(1) < 0.005) {
    trains.push(new Train());
  }
  
  background(bImg);  
  for (let t of trains) {
    t.move();
    t.show();
    if (unicorn.hits(t)) {
      fill(255)
      textSize(70)
      text('Game Over!', 215, height/2);
      noLoop();
    }
  }

  unicorn.show();
  unicorn.move();
}
