var backgroundImg;
var obstacleGroup, obstacleImg;
var boy_running;
var boy;
var ground;
var gameState="play";
var score;


function preload(){
    //Loading imgs
backgroundImg = loadImage("road-side.jpg");
obstacleImg = loadImage("hurdle.png");
boy_running = loadAnimation("boy-running1.png", "boy-running2.png", 
"boy-running3.png", "boy-running4.png", "boy-running5.png", "boy-running6.png");
}

function setup() {
 createCanvas(windowWidth, windowHeight);

 //creating the boy 
 boy = createSprite(100,400,20,50);
  boy.addAnimation("running", boy_running);
  boy.scale = .6;

  //creating the ground
ground = createSprite(600,500,1500,20);
ground.x = ground.width /2;
ground.velocityX = -4;
ground.visible = false;

//creating the obstalce group
obstacleGroup = new Group();
boy.setCollider("circle", 0,150, 30,);
score = 0;

}



function draw() {
 background(backgroundImg);
 text("Score: "+ score, 500,50, );
 

boy.collide(ground);



boy.velocityY = boy.velocityY + 0.8



//reset the ground :)


  if(gameState==="play") {

score = score + Math.round(frameCount/60);

    if(keyDown("space")&& boy.y >= 300) {
        boy.velocityY = -15;
      }

spawnObstacles();

    if (backgroundImg.x < 0){
        ground.x = ground.width/2;
      }

      if(obstacleGroup.isTouching(boy)) {
        gameState = "end";
      }
  }


  if(gameState=="end") {
    ground.velocityX = 0;
    boy.velocityX = 0;
    text("GAME OVER", 600, 100,);
    stroke("red");
  }
  
 drawSprites();
 }



 function spawnObstacles(){
    if (frameCount % 80 === 0){
      var obstacle = createSprite(1000,400,10,40);
      obstacle.velocityX = -6;
   
      
      
    obstacle.addImage(obstacleImg);
     
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.15;
       obstacle.lifetime = 300;
       obstacleGroup.add(obstacle);
    }
      
    }
   

 