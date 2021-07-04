var PLAY = 1;
var END = 0;
var gameState = PLAY;

var zombie_girl;
var zombie_boy;
var Player;

var zombie_Girlattack;
var zombie_Girldead;
var zombie_Girlwalk;

var zombie_Boyattack;
var zombie_Boydead;
var zombie_Boywalk;

var playerGirl;
var playerBoy;

var score=0;
var gameOver, resart;

function preload(){

zombie_Girlwalk= loadAnimation("female/Walk1.png", "female/Walk2.png", "female/Walk3.png", "female/Walk4.png", "female/Walk5.png", "female/Walk6.png")
zombie_Boywalk= loadAnimatione("male/Walk(1).png", "male/Walk(2).png", "male/Walk(3).png", "male/Walk(4).png", "male/Walk(5).png", "male/Walk(6).png")

playerGirl_dead= loadAnimation("female/DeadGirl1.png", "female/DeadGirl2.png", "female/DeadGirl3.png", "female/DeadGirl4.png")
playerGirl_shoot= loadAnimation("female/ShootGirl1.png", "female/ShootGirl2.png", "female/ShootGirl3.png" )

}

function setup() {
    var canvas = createCanvas(1200,400);

    ground= new Ground(600,height,1200,20);

    player = createSprite(50,450)
    player.addAnimation("Attack", playerGirl_shoot)
    player.addAnimation("Dead", playerGirl_dead)

    zombieG.addAnimation("Walk", zombie_Girlwalk)
    zombieB.addAnimation("WalkB", zombie_Boywalk)

    score = 0;
}

function draw(){

zombie_Girlwalk.display();
zombie_Boywalk.display();

playerGirl_dead.display();
playerGirl_shoot.display();

    text("Score: "+ score, windowHeight + 85 , 50);
    
    spawnObstacles();
  
    if(obstaclesGroup.isTouching(player)){
        player("Dead")
        text("Game Over")
        gameState = END;
    }


if(key_DownPressed){ 
playerGirl_shoot=LoadImage();
}
}

function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(width,height-45,width,20);
      obstacle.debug = true;    
      obstacle.velocityX = -(6 + 3*score/100);
      
      //generate random obstacles
      var rand = Math.round(random(1,6));
      switch(rand) {
        case 1: obstacle.addImage("female/Walk(1).png", "female/Walk(2).png", "female/Walk(3).png", "female/Walk(4).png", "female/Walk(5).png", "female/Walk(6).png");
                break;
        case 2: obstacle.addImage("male/Walk(1).png", "male/Walk(2).png", "male/Walk(3).png", "male/Walk(4).png", "male/Walk(5).png", "male/Walk(6).png");
                break;
        case 3: obstacle.addImage("female/Walk(1).png", "female/Walk(2).png", "female/Walk(3).png", "female/Walk(4).png", "female/Walk(5).png", "female/Walk(6).png");
                break;
        case 4: obstacle.addImage("male/Walk(1).png", "male/Walk(2).png", "male/Walk(3).png", "male/Walk(4).png", "male/Walk(5).png", "male/Walk(6).png");
                break;
        case 5: obstacle.addImage("female/Walk(1).png", "female/Walk(2).png", "female/Walk(3).png", "female/Walk(4).png", "female/Walk(5).png", "female/Walk(6).png");
                break;
        case 6: obstacle.addImage("male/Walk(1).png", "male/Walk(2).png", "male/Walk(3).png", "male/Walk(4).png", "male/Walk(5).png", "male/Walk(6).png");
                break;
        default: break;
      }
      
                
      obstacle.scale = 0.5;
      obstacle.lifetime = 300;
      
      obstaclesGroup.add(zombie_Girlwalk);
      obstaclesGroup.add(zombie_Boywalk);
    }
  }