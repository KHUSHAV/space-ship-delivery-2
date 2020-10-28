var helicopterIMG, helicopterSprite, packageSprite,packageIMG , groundSprite ;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var border1 , border2 , border3 ;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    border1 = new Border(400,650,200,40);
	border2 = new Border(310,610,20,100);
	border3 = new Border(490,610,20,100);
	border1 = createSprite(400,650,200,20);
	border2 = createSprite(310,610,20,100);
	border3 = createSprite(490,610,20,100);
    border1.shapeColor = "red" ;
	border2.shapeColor = "red" ;
	border3.shapeColor = "red" ;


	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  
  drawSprites();
 
 
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody, false);

  }
}



