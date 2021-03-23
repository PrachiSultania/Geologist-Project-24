
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer, stone, plane;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(100, 100)
    plane = new Plane(width/2 ,height ,width,20);
    stone = new Stone(700,250,40,40);
    rubber = new Rubber(200, 100);

  
}


function draw() {
  
  background("#66c2ff");
  Engine.update(engine);
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
 
 
}

    
    
    

