
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect2,rect22;

function preload(){
    rect22 = loadImage("sprites/dustbingreen.png"); 
}

function setup() {
	createCanvas(800, 600);

	rect2 = createSprite(620,470,10,10);
	rect2.addImage(rect22);
	rect2.scale=0.5;


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,550,800,10);
	paper = new Ball(100,523,20);
	box1 = new Box(570,490,10,100);
	box2 = new Box(620,540,100,10);
	box3 = new Box(670,490,10,100);
	
	
	Engine.run(engine);
	
}


function draw() {
  background("grey");
  
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  keyPressed();
  
  textSize(15);
  fill("white");
  text("PRESS RIGHT,LEFT,UP AND DOWN TO CONTROL PAPER AND PUT IT IN DUSTBIN",100,100);
 
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:-5},);
	}
	if(keyDown(DOWN_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:5},);
		}
    if(keyDown(RIGHT_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-0.1},);
			}
    if(keyDown(LEFT_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-2,y:0.1},);
				}
}


