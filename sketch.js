var monkey, monkey_running;
var bananaImage, obstacleImage, ground;
var FoodGroup, obstacleGroup;
var score;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}

function setup() {
  createCanvas(600, 400);

  monkey = createSprite(60, 300, 20, 20);
  monkey.addAnimation("sprite", monkey_running);
  monkey.scale = 0.15;


  ground = createSprite(300, 350, 600, 10);

  score = 0;

  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  textSize(20);
  textFont('Georgia');
  fill("black");
}

function draw() {
  background("white");
   
  text("survival time:"+score,240,20);
  
  score = score + Math.round(getFrameRate()/30);
  
  if (keyDown("space") && monkey.y >= 295) {

    monkey.velocityY = -15;

  }
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);

  spawnbananas();
  spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(650, 320, 20, 20);
    obstacle.addAnimation("sprite2", obstaceImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.lifetime = 110;
    obstacleGroup.add(obstacle);
  }
}

function spawnbananas() {
  if (frameCount % 80 === 0) {

    var banana = createSprite(650, 320, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -6;
    banana.y = Math.round(random(150, 200))
    banana.lifetime = 110;
    FoodGroup.add(banana);
  }
}