const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(220,100,50,50);
    box2 = new Box(210,200,50,80);
box3 = new Box (200,50,10,50);
    ground = new Ground(200,380,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("blue");
    box1.display();
    fill("yellow");
   box2.display();
   fill("pink");
   box3.display();

   fill("green");
   ground.display();
}