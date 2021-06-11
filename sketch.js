const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies; 

var ground;
var ball;

var engine;
var world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);
  var options = {
    restitution:1
  }
  ball = Bodies.circle(100,100,20,options);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}