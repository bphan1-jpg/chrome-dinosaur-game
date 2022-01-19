// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html
// https://youtu.be/l0HoJHc-63Q
// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

let unicorn;
let uImg;
let tImg;
let bImg;
let cImg;
let brImg;
let score = 0; 
let scrollBg = 0;
let scroll = 10;
let trains = [];
let cars = [];
let birds = [];
let restart = true;

function preload() {

  music = loadSound('music.mp3');
  uImg = loadImage('unicorn.png');
  tImg = loadImage('train.png');
  bImg = loadImage('background.jpg');
  cImg = loadImage('car_adobespark.png');
  brImg = loadImage('bird.png');
}

function mousePressed() {
  trains.push(new Train());
}

function setup() {
  createCanvas(800, 450);
  unicorn = new Unicorn();
  music.playMode('restart');
  music.setLoop(true);
  music.play();
createP('Press Space key to jump, click the mouse to spawn a train')
createP('Press any key to restart the game when hits train or car')
createP('Cars will spawn randomly, be careful!')
createP('Dont worry, birds are friendly :)')
}


  function keyPressed() {
  if (restart){
    restart = false;
    score = 0;
    scrollBg = 0;
    scroll = 10;
    trains = [];
    cars =[];
    birds = [];
    music.play();
    loop();
  }
  if (key == ' ') {
    unicorn.jump();
  }

}


function draw() {
  image(bImg, -scrollBg, 0, width,height);
  image(bImg, -scrollBg + width, 0,width,height);
  
  if (scrollBg > width) {
    scrollBg = 0;
  }
   if (random(1)< 0.001){
    cars.push(new Cars());
   }
    if (random(1)< 0.01){
    birds.push(new Birds());
   }
    if (frameCount % 5 == 0) {
    score++;
  }

  
  fill(255)
  textSize(32);
  textFont('sans-serif');
  text(`Score: ${score}`, 10, 30);
  for (let t of trains) {
    t.move();
    t.show();
    if (unicorn.hits(t)) {
      noLoop();
      fill(255)
      text(`Game Over! Press any key to restart`, 90, height/2)
      restart = true;
    }
  }
    for (let c of cars) {
    c.move();
    c.show();
    if (unicorn.hits(c)) {
      noLoop();      
      fill(255)
      text(`Game Over! Press any key to restart`, 90, height/2)
      restart = true;
    }
  }
    for (let b of birds){
      b.move();
      b.show();
    }
  unicorn.show();
  unicorn.move();
  scroll += 0.005;
  scrollBg += scroll / 5;
}
