
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	 startBobPositionX=width/2;
	  startBobPositionY=height/4+500;
	   bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
		bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
		bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
		 bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
		  bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



