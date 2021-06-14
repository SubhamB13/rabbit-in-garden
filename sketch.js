var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves;
var appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){

  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.velocityY=2;
  apple.scale = 0.1;
  apple.lifetime=200;
  apple.depth=rabbit.depth;
  rabbit.depth = rabbit.depth+1;


}

function createLeaves(){

leaves = createSprite(random(50,350),40,10,10);
leaves.addImage(leavesImg);
leaves.velocityY=2;
leaves.scale = 0.1;
leaves.lifetime=200;
leaves.depth=rabbit.depth;
rabbit.depth = rabbit.depth+1;

}


function draw() {
  background(0);
  
rabbit.x=mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(frameCount % 80 === 0){

    createLeaves();
    createApples();
  }
 // if(leaves.collide(rabbit)){
   // leaves.destroy(rabbit);
 // }

  drawSprites();
}

