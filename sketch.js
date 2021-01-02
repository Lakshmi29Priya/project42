const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint; 

var batman,batmanImage;
var thunder,thunderImage;
var drop1;

function preload(){
batmanImage=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
thunderImage=loadAnimation("1.png","2.png","3.png","4.png");
}

function setup(){
    createCanvas(800,800);   
    engine = Engine.create();
    world = engine.world;   
 
 batman=createSprite(200,400,20,20);
 batman.addAnimation("batman1",batmanImage);
batman.scale=0.5;
World.add(world,batman);
if(frameCount<12){
thunder=createSprite(130,125,20,20);
thunder.addAnimation("thunder1",thunderImage);
thunder.scale=0.3;
drop1=new Drop(100,50,20);
Engine.run(engine);
}
}

function draw(){
  background("black")
    drawSprites();
    var selectDrop=Math.round(random(1,100));
    if(selectDrop%15==0){
      drop1=new Drop(100,50,20);
    }
    drop1.display();

}   

