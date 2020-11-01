
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
var ground1;
var base1, base2;
var b1, b2, b3, b4, b5, b6, b7;
var b8, b9, b10, b11, b12;
var b13, b14, b15, b16;

var a1, a2, a3, a4, a5, a6, a7;
var a8, a9, a10, a11, a12;
var a13, a14, a15, a16;
var score=0;
var backgroungImg;
var gameState = "on slingshot";
var bg = "Longest-Day-2019-1923662.jpg";

function preload() {
  getBackgroundImg();
  backgroundImg = loadImage("Longest-Day-2019-1923662.jpg");
}


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
	//Create the Bodies Here.
   //polygon = new Polygon(50, 200, 40, 40);
   ground1 = new Ground(600, 700, 1200, 100);

   base1 = new Ground(480, 350, 320, 30);
   base2 = new Ground(980, 250, 320, 30);

   b1 = new Block(400, 345, 40, 40);
   b2 = new Block(430, 345, 40, 40);
   b3 = new Block(460, 345, 40, 40);
   b4 = new Block(490, 345, 40, 40);
   b5 = new Block(520, 345, 40, 40);
   b6 = new Block(550, 345, 40, 40);
   b7 = new Block(580, 345, 40, 40);

   b8 = new Block(430, 305, 40, 40);
   b9 = new Block(460, 305, 40, 40);
   b10 = new Block(490, 305, 40, 40);
   b11= new Block(520, 305, 40, 40);
   b12 = new Block(550, 305, 40, 40);

   b13 = new Block(460, 265, 40, 40);
   b14 = new Block(490, 265, 40, 40);
   b15 = new Block(520, 265, 40, 40);

   b16 = new Block(490, 225, 40, 40);

   a1 = new Block(900, 245, 40, 40);
   a2 = new Block(930, 245, 40, 40);
   a3 = new Block(960, 245, 40, 40);
   a4 = new Block(990, 245, 40, 40);
   a5 = new Block(1020, 245, 40, 40);
   a6 = new Block(1050, 245, 40, 40);
   a7 = new Block(1080, 245, 40, 40);

   a8 = new Block(930, 205, 40, 40);
   a9 = new Block(960, 205, 40, 40);
   a10 = new Block(990, 205, 40, 40);
   a11 = new Block(1020, 205, 40, 40);
   a12 = new Block(1050, 205, 40, 40);

   a13 = new Block(960, 165, 40, 40);
   a14 = new Block(990, 165, 40, 40);
   a15 = new Block(1020, 165, 40, 40);

   a16 = new Block(990, 125, 40, 40);

polygon= new Polygon(100,280,40)
polygon.scale=0.05;
Slingshot=new slingshot(polygon.body, {x: 150, y: 150});


}


function draw() {
  if(backgroundImg) {
    background(backgroundImg);
}
 
  
  rectMode(CENTER);
  
  Engine.update(engine);
  fill("pink");
  b1.display();
  
  b2.display();

  b3.display();

  b4.display();

  b5.display();

  b6.display();
  
  b7.display();
  

  
  
  fill(rgb(52, 204, 255));
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("gold");
  b13.display();
  b14.display();
  b15.display();
  fill(rgb(127,255,0));
  b16.display();
  

  fill(rgb(127, 255, 0));
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();

  fill("gold")
  a8.display();
  a9.display();
  a10.display();
  a11.display();
  a12.display();

  fill(rgb(52, 204, 255));
  a13.display();
  a14.display();
  a15.display();

  fill("pink");
  a16.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();

  a1.score();
  a2.score();
  a3.score();
  a4.score();
  a5.score();
  a6.score();
  a7.score();
  a8.score();
  a9.score();
  a10.score();
  a11.score();
  a12.score();
  a13.score();
  a14.score();
  a15.score();
  a16.score();

 

  drawSprites();
  ground1.display();
 //polygon.display();
 base1.display();
 base2.display();
 polygon.display();
 Slingshot.display();

 imageMode(CENTER)
  

 
 
 textSize(25);
 stroke(0);
 fill(0);
 textFont("Harrington");
 text("Destroy the blocks with the help of the polygon", 300, 100);
 fill("white");
 text("𝙿𝚛𝚎𝚜𝚜 𝚜𝚙𝚊𝚌𝚎 𝚝𝚘 𝚐𝚎𝚝 𝚘𝚗𝚎 𝚖𝚘𝚛𝚎 𝚌𝚑𝚊𝚗𝚌𝚎 𝚝𝚘 𝚙𝚕𝚊𝚢.", 300, 560);
 text("score:"+score,900,40);
 
}
function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased() {
  Slingshot.fly();
  gameState = "launched";
}

function keyPressed() {
  if(keyCode === 32) {
      slingShot.attach(polygon.body);
      gameState = "on slingshot";
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=18){
      bg = "Longest-Day-2019-1923662.jpg"
  } else {
      bg = "download.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}


