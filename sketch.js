var Car,Wall;
var Speed,Weight;
var Defomation;

function setup() {
  createCanvas(1600,400);
  
  Speed = random(55,90);
  Weight = random(400,1500);
  
  Car = createSprite(50,200,50,50);
  

  Car.velocityX = Speed;

  Wall = createSprite(1500,200,60,height/2);
  Wall.shapeColor = (80,80,80);
  
  Deformation = 0.5 * Weight * Speed * Speed/22500;
  
  
}

function draw() {
  background("lightblue");  
  
  Car.shapeColor = ("grey"); 

  if(Deformation>180){
    Car.shapeColor =color(225,0,0);
  }
  if(Deformation<180 && Deformation>100){
    Car.shapeColor =color(230,230,0);
  }
  if(Deformation<100){
    Car.shapeColor =color(0,225,0);
  }

  if(Car.isTouching(Wall)){
    Car.velocityX = 0;
  }

  drawSprites();
}