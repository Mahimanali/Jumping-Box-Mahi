var canvas;
var music;
var box1 , box2  ,  box3 , box4 ;
var movingBox ;
function preload(){
    music = loadSound("music.mp3");                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}


function setup(){
    canvas = createCanvas(800,600);
  //create 4 different surfaces
 box1=createSprite(70 , 590 , 100 , 25);
 box1.shapeColor="blue";

 box2=createSprite(270, 590 , 100 , 25);
 box2.shapeColor="yellow";

 box3=createSprite(470 , 590 , 100 , 25);
 box3.shapeColor="purple";

 box4=createSprite(670 , 590 , 100 , 25);
 box4.shapeColor="darkgreen";
 
 movingBox=createSprite(400, 10, 30 , 30);
 movingBox.velocityY=4;
 movingBox.shapeColor="white";
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   
drawSprites();
    //add condition to check if box touching surface and make it box
}
