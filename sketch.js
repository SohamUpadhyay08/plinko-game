const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight=300


function preload(){
  
}


function setup() {
  createCanvas(500,780);


  engine = Engine.create();
  world = engine.world;
 
  for(var k = 10;k <= width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 80; j <=width-100; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 40; j <=width-50; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 20; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 20; j <=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  
  


  
  ground = new Ground(240,775,800,10)
  
}

function draw() {
  background("cyan");
  Engine.update(engine);

  if(frameCount%50===0){
    particles.push(new Particle(random(width/2-60,width/2+60),10,10))
  }

  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
  }
  for(var j = 0;j < plinkos.length; j++){
    plinkos[j].display();
  }

  for(var j = 0;j < particles.length; j++){
    particles[j].display();
  }
  ground.display();

  textSize(40);
  fill("grey");
  text("PLINKO GAME ",100,450);
  //drawSprites();
}