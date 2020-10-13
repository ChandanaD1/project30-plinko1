const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,650,480,20)

  for(var d = 83.5; d<= 460; d = d + 78.5) {
    divisions.push(new Division(d,520,10,278))
  }

  for(var l = 50; l<= 300; l = l+100) {
    for(var p = 40; p<= width; p = p + 50) {
      plinkos.push(new Plinko(p,l,10))
    }
  }

  for(var l = 100; l<= 300; l = l+100) {
    for(var p = 65; p<= 450; p = p + 50) {
      plinkos.push(new Plinko(p,l,10))
    }
  }

  division1 = new Division(5,320,10,650)
  division2 = new Division(476,320,10,650)
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine)

  for(var i = 0; i<divisions.length; i = i+1) {
    divisions[i].display();
  }

  division1.display();
  division2.display();

  ground1.display();

  for(var i = 0; i< plinkos.length; i = i+ 1) {
    plinkos[i].display();
  }

  if(frameCount % 80 == 0) {
    particles.push(new Particle(random(10,390),0,10))
  }

  for(var i = 0; i< particles.length; i = i+ 1) {
    particles[i].display();
  }

  drawSprites();
}