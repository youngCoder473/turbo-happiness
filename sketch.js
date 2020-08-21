const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;
var x
var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = Bodies.rectangle(0,780,20000,10,{isStatic:true,restitution:0.2});
  World.add(world,ground);

  wall = new Wall(120,730);
  wallTwo = new Wall(240,730);
  wallThree = new Wall(360,730);
  wallFour = new Wall(0,730);
  wallFive = new Wall(470,730);
  
  for(var i=40; i<=width;i=i+50){
    plinko.push(new Plink(i,75))

    plinko.push(new Plink(i,150))

    plinko.push(new Plink(i,225))

    plinko.push(new Plink(i,300))

    plinko.push(new Plink(i,375))

    plinko.push(new Plink(i,450))

    plinko.push(new Plink(i,525))

    plinko.push(new Plink(i,600))

  }


  //createSprite(400, 200, 50, 50);
}

function draw() {

  background(0,0,0);
  
  fill("white");
  rect(0,780,800,10);

  wall.display();
  wallTwo.display();
  wallThree.display();
  wallFour.display();
  wallFive.display();

  for(var z=0;z<plinko.length;z++){
    plinko[z].display();
  }

  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-100,width/2+100),10,10))
  }

  for(var y=0;y<particles.length;y++){
    particles[y].display();
  }

  Engine.update(engine);
  drawSprites();
}