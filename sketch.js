const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.body;
const Constraint=Matter.Constraint;

var hexa,hexaImg,ground;
var stand1,stand2;
var chain; 
var engine,world;
var sky,skyImg;

function preload(){
    skyImg=loadImage("sky.jpg");
   hexaImg=loadImage("polygon.png");
}
function setup(){
createCanvas(800,650);

engine= Engine.create();
world=engine.world;

sky=createSprite(400,200,50,700);
sky.addImage(skyImg);
sky.scale=0.3;

ground=new Ground();
stand1=new Stand(640,285,270,15);
stand2=new Stand(330,450,290,15);

block1=new Block(240,425,30,30)
block2=new Block(270,425,30,30)
block3=new Block(300,425,30,30)
block4=new Block(330,425,30,30)
block5=new Block(360,425,30,30)
block6=new Block(390,425,30,30)
block7=new Block(420,425,30,30)

block8=new Block(270,395,30,30)
block9=new Block(300,395,30,30)
block10=new Block(330,395,30,30)
block11=new Block(360,395,30,30)
block12=new Block(390,395,30,30)

block13=new Block(300,365,30,30)
block14=new Block(330,365,30,30)
block15=new Block(360,365,30,30)

block16=new Block(330,335,30,30)


block17=new Block(580,225,30,30)
block18=new Block(610,225,30,30)
block19=new Block(640,225,30,30)
block20=new Block(670,225,30,30)
block21=new Block(700,225,30,30)

block22=new Block(610,195,30,30)
block23=new Block(640,195,30,30)
block24=new Block(670,195,30,30)

block25=new Block(640,165,30,30)

block26=new Block(550,255,30,30)
block27=new Block(580,255,30,30)
block28=new Block(610,255,30,30)
block29=new Block(640,255,30,30)
block30=new Block(670,255,30,30)
block31=new Block(700,255,30,30)
block32=new Block(730,255,30,30)

hexa=Bodies.circle(170,150,80);
World.add(world,hexa);

chain=new Chain(hexa,{x:80,y:120})

Engine.run(engine);

}

function draw(){
background("sky");

Engine.update(engine);

sky.display();

stroke(0);
fill("black");
ground.display();

stroke(15);
stand1.display();
stand2.display();

fill(0,53,68);
stroke(15);
block1.display();
block3.display();
block5.display();
block7.display();
block13.display();
block15.display(); 
block8.display();
block10.display();
block12.display();
block16.display(); 

fill("cyan");
stroke(15);
block2.display();
block4.display();
block6.display();
block9.display();
block11.display();
block14.display();


fill(250,92,24);
stroke(15);
block17.display(); 
block19.display(); 
block21.display(); 
block22.display();
block24.display(); 
block25.display(); 
block26.display(); 
block30.display(); 
block28.display(); 
block32.display();

fill("yellow");
stroke(15);
block18.display(); 
block20.display(); 
block23.display();
block27.display(); 
block29.display(); 
block31.display();
 
stroke(15);
chain.display();

imageMode(CENTER);
image(hexaImg,hexa.position.x,hexa.position.y,40,40);
}
function mouseDragged(){
    Matter.Body.setPosition(hexa,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}