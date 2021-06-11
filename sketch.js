const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground,superhero,monster,monste2,ok;

function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png");
monste2 = loadImage("images/Monster-01.png")
//monster1 = loadImage("images/Monster-02.png")
}

function setup() {
  createCanvas(900, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(100,297,1100,5);
  superhero = new Superhero(100,100,100,100);
  ok = new Throw(superhero.body,{x:100,y:465});
  monste2 = new mon(600,267,100,100);
   //level 
   block1 = new Block(280,275,30,40);
   block2 = new Block(310,275,30,40);
   block3 = new Block(340,275,30,40);
   block4 = new Block(370,275,30,40);
   block5 = new Block(400,275,30,40);
   block6 = new Block(430,275,30,40);
   block7 = new Block(460,275,30,40);
   block8 = new Block(490,275,30,40);
   //level2
   block9 = new Block(310,235,30,40);
   block10= new Block(340,235,30,40);
   block11= new Block(370,235,30,40);
   block12= new Block(400,235,30,40);
   block13= new Block(430,235,30,40);
   block14= new Block(460,235,30,40);
   //level 3
   block15= new Block(340,195,30,40);
   block16= new Block(370,195,30,40);
   block17= new Block(400,195,30,40);
   block18= new Block(430,195,30,40);
   //level 4
   block19= new Block(370,155,30,40);
   block20= new Block(400,155,30,40);
   //level 5
   block21= new Block(385,115,30,40);
 
 
  
  //monster.changeAnimation("Monster",monster1)


}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(bg);

 

superhero.display();
ground.display();
stroke(15);
      fill("black")
      block1.display();
      block2.display();
      block3.display();
      block4.display();
      block5.display();
      block6.display();
      block7.display();
      block8.display();
      stroke(15)
      fill("orange")
      block9.display();
      block10.display();
      block11.display();
      block12.display();
      block13.display();
      block14.display();
      stroke(15)
      fill("violet")
      block15.display();
      block16.display();
      block17.display();
      block18.display();
      stroke(15)
      fill("green")
      block19.display();
      block20.display();
      stroke(15)
      fill("blue")
      block21.display();
     
      monste2.display();

      
      
    
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}


