const Engine= Matter.Engine;

const World= Matter.World;

const Bodies= Matter.Bodies;

var PhysicsEngine, MyWorld;
var ground, ball



function setup()
{
  createCanvas(400,400);

  PhysicsEngine= Engine.create();
  MyWorld= PhysicsEngine.world;

  var Options= 
  {
    isStatic: true

  }

  var BallOptions=
  {
    restitution: 0.5
  }
  
  
  
 
  ball= Bodies.circle(200, 200, 40, BallOptions);


  ground= Bodies.rectangle(200, 380, 400, 10, Options);

  World.add(MyWorld, ground);
  World.add(MyWorld, ball);
  



  


}

function draw()
{
  background(0);

  Engine.update(PhysicsEngine)
  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40,40);







}