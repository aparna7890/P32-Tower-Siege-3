const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2;
var score = 0
var Hour, DateTime, bgImg

function preload(){
  polygonImg = loadImage("polygon.png")
  day = loadImage("day.png")
  night = loadImage("night.png")
  //getBg()
}

function setup(){
  createCanvas(1200, 500);

  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic : false,
    density : 0.7,
    friction : 1
  }
  polygon = Bodies.circle(170, 300, 30, options)
  World.add(world, polygon)

  band = new Slingshot(polygon, {x: 170, y: 300})

  ground = new Ground(600, 490, 1200, 20);
  stand1 = new Ground(605, 380, 220, 20);
  stand2 = new Ground(997, 300, 220, 20);

  box1 = new Box(529, 330, 50, 50)
  box2 = new Box(580, 330, 50, 50)
  box3 = new Box(631, 330, 50, 50)
  box4 = new Box(682, 330, 50, 50)

  box5 = new Box(555, 304, 50, 50)
  box6 = new Box(606, 304, 50, 50)
  box7 = new Box(657, 304, 50, 50)
  
  box8 = new Box(581, 255, 50, 50)
  box9 = new Box(632, 255, 50, 50)

  box10 = new Box(607, 210, 50, 50)

  box11 = new Box(920, 275, 50, 50)
  box12 = new Box(971, 275, 50, 50)
  box13 = new Box(1022, 275, 50, 50)
  box14 = new Box(1073, 275, 50, 50)

  box15 = new Box(945, 240, 50, 50)
  box16 = new Box(996, 240, 50, 50)
  box17 = new Box(1047, 240, 50, 50)

  box18 = new Box(971, 190, 50, 50)
  box19 = new Box(1020, 190, 50, 50)

  box20 = new Box(996, 140, 50, 50)
}

function draw(){
  //if(bgImg)//we removed the API and time due to security issues in github
  background(255)
  push();
    fill(0)
    textSize(20)
    text("Drag the hexagon and release to launch it towards the blocks.", 100, 50)
    text("Press 'Space' to get a second chance to play!", 100, 80)
    text("Score: "+score, 100, 120)
    pop();
  
  
  Engine.update(engine);
  
  imageMode(CENTER)
  image(polygonImg, polygon.position.x, polygon.position.y, 80, 80)

  ground.display();
  stand1.display();
  stand2.display();
  band.display();

  push();
  fill("cyan")
  box1.display();   box2.display();   box3.display();   box4.display();
  box11.display();  box12.display();  box13.display();  box14.display();
  pop();

  push();
  fill("magenta")
  box5.display();  box6.display();  box7.display();
  box15.display();  box16.display();  box17.display();
  pop();

  push();
  fill(139, 247, 82)
  box8.display();  box9.display();
  box18.display();  box19.display();
  pop();

  push();
  fill("yellow")
  box10.display()
  box20.display();
  pop();

  box1.score();   box2.score();   box3.score();   box4.score();   box5.score();
  box6.score();   box7.score();   box8.score();   box9.score();   box10.score();

  box11.score();  box12.score();  box13.score();  box14.score();  box15.score();
  box16.score();  box17.score();  box18.score();  box19.score();  box20.score();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY})
}

function mouseReleased(){
  band.fly();
}

function keyPressed(){
  if(keyCode === 32){
    band.attach(this.polygon);
  }
}

/*
async function getBg(){
  var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
  var responseJSON = await response.json();
  //console.log(responseJSON)

  var DateTime = responseJSON.datetime;
  //console.log(DateTime)

  var Hour = DateTime.slice(11, 13)
  //console.log(Hour)

  if(Hour > 6 && Hour < 18){
    bgImg = loadImage("day.png")
  }
  else{
    bgImg = loadImage("night.png")
  }
}*/