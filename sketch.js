
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var world, boy;
var stone;
var elastic;

function preload(){
	boy=loadImage("images/boy.png");
	stone=loadImage("images/stone.png");
	}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create(); 
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1200,150,20);
	mango3 = new mango(1120,170,35);
	mango4 = new mango(1000,125,20);
	mango5 = new mango(1000,190,30);
	mango6 = new mango(900,160,30);
	mango7 = new mango(950,230,30);
	mango8 = new mango(1000,60,30)
	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	elastic = new Elastic(stone.body,{x: 210, y:400});

	//Engine.run(engine);

}

function draw() {

  Engine.update(engine);

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  image(stone,210,395,50,50);

  
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  groundObject.display();

  elastic.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){ 
    elastic.fly();
}

