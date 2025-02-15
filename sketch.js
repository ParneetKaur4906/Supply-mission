var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	



   var package_options ={
	   isStatic: true,
	   restitution: 0.70
	
   }
 
	packageBody = Bodies.circle(width/2 , 200 , 5,package_options);
	World.add(world, packageBody);
	

	//Create a Ground

	var ground_options ={
		isStatic: true
		}

	ground = Bodies.rectangle(width/2, 650, width, 10,ground_options);
 	World.add(world, ground);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(packageBody.x,packageBody.y,20,20);

  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
	   
}
   
   
 
 

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);

  
  
   
	   // Look at the hints in the document and understand how to make the package body fall only on
	   
	 }
   }
   



