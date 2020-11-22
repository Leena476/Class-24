const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var box1, box2, box3,box4,box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,580,1200,30);

    box1 = new Box(700,500,70,70);
    box2 = new Box(920,500,70,70);
    box3 = new Box(700,370,70,70);
    box4 = new Box(920,370,70,70);
    box5 = new Box(810,300,70,70);

    pig1 = new Pig(810,500,60,60);
    pig2 = new Pig(810,370,60,60);

    log1 = new Log(810,400,25,300,PI/2);
    log2 = new Log(810,340,25,300,PI/2);
    log3 = new Log(755,200,150,20,PI/4);
    log4 = new Log(865,200,150,20,PI/4);

    bird1 = new Bird(300,550,50);
    
    console.log(bird1);
    
}

function draw(){
    background("lightblue");
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();

}