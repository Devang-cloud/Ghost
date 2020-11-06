var tower,towerImage
var ghost,ghostImage
var doors
var Climbers
var invisbleblock
function preload(){
  towerImage=loadImage("tower.png")
  ghostImage=loadAnimation("ghost-standing.png","ghost-jumping.png")
  doorImage=loadImage("door.png")
  ClimberImage=loadImage("climber.png")
}
function setup(){
  createCanvas(600,600)
  tower=createSprite(300,0,600,600)
  ghost=createSprite(300,300,50,10)
  ghost.addAnimation("ghost",ghostImage)
  tower.addImage(towerImage)
  tower.velocityY=2
  ghost.scale=0.5
  ClimbersGroup=new Group();
  DoorsGroup=new Group();
  invisibleGroup=new Group();
}
function draw(){
  //console.log(tower.y)
  if(keyDown(LEFT_ARROW)){
    ghost.x=ghost.x-5; 
  }
  if(keyDown(RIGHT_ARROW)){
    ghost.x=ghost.x+5;
  }
  if(tower.y>600){
    tower.y=300
  }
        if(keyDown("space")) {
    ghost.velocityY = -13;
  }
   ghost.velocityY = ghost.velocityY + 0.8
  if(ClimbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }

  spawndoors();
    drawSprites();
}
function spawndoors(){
  if (frameCount % 120===0){
  doors=createSprite(200,200,50,50)
  doors.addImage(doorImage)
    doors.x=Math.round(random(120,400))
    doors.velocityY=2
    doors.lifetime=300
    DoorsGroup.add(doors);
    Climbers=createSprite(200,260,50,50)
    Climbers.x=doors.x
    Climbers.addImage(ClimberImage)
    Climbers.velocityY=doors.velocityY
    console.log(ghost.depth)
    doors.depth=ghost.depth;
    ghost.depth=ghost.depth+1;
    ClimbersGroup.add(Climbers);
    invisibleblock=createSprite(200,270,50,20)
    invisibleblock.width=Climbers.width
    invisibleblock.x=doors.x
    invisibleblock.velocityY=2
    invisibleblock.visible=false;
    invisibleGroup.add(invisibleblock)
  }
  
}