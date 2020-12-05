var PLAY = 1;
var END = 0;


var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,200 );
  monkey = createSprite(150,50,20,50);
  
   monkey.addAnimation("running", monkey_running);
monkey.velocityY=-4
  monkey.scale = 0.1;
  
  ground = createSprite(550,170,1200,10);
  ground.velocityX=-6
  ground.x = ground.width /2;
 
invisibleGround = createSprite(550,170,111000,10);
     invisibleGround.x = invisibleGround.width /2;
  invisibleGround.velocityX=-6
  invisibleGround.visible = false;

obstaceGroup=new Group()
  bananaGroup=new Group()
}


function draw() {
background("white")
   text("Score: "+ score, 500,50);
  
 
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
 
    
    
    
    if (obstaceGroup.isTouching(monkey)){
     monkey.scale=0.1
        }
    
  switch(score){
     case 10:monkey.scale=0.12
       break;
        case 20:monkey.scale=0.14
       break;
        case 30:monkey.scale=0.16
       break;
        case 40:monkey.scale=0.18
       break;
   }
    
    
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(invisibleGround);
     spawnObstace() 
spawnBanana()
  
    
  

   drawSprites();
}
function spawnBanana() {
 
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(10,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX=-3
     banana.lifetime = 200;
  banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananaGroup.add(banana)
     }
}
function spawnObstace() {
  if(frameCount % 60 === 0) {
    var  obstace = createSprite(170,160,10,40);
    obstace.addImage( obstaceImage)
  obstace.x=Math.round(random(600,700))
    obstace.scale = 0.1;
     obstace.velocityX=-3
    obstace.lifetime = 300;
obstaceGroup.add(obstace)
  }
  }