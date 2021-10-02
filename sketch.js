var fixrect,movingrect;

function setup() {
  createCanvas(1200,800);
  
fixrect=createSprite(600, 400, 50, 50); 
fixrect.shapeColor="green";
fixrect.debug=true;

movingrect=createSprite(400,200,80,80);
movingrect.shapeColor="green"
movingrect.debug=true;

}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(fixrect.x-movingrect.x< fixrect.width/2+movingrect.width/2
    &&movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2
    &&fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2
    &&movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2
    ){
    fixrect.shapeColor="red";
    movingrect.shapeColor="red";
  }else{
    fixrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  drawSprites();

   
}