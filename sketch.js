var dog,dogImage1,dogImage2;
var database;
var foodS,foodStock;

function preload()
{
dogImage1 = loadImage("images/doglmg1.png");  
dogImage2 = loadImage("images/doglmg.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  
  dog = createSprite(220,400,30,50)
  dog.addImage(dogImage1);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(Up_Arrow)){
    writeStock(foodS);
    dog.addImage(dogImage2)
  }

  drawSprites();
  textSize(32);
  fill("yellow");
  text(foodStock,200,100);
  text("Note: Press Up key to feed Drago milk ",150,250)

}

function readStock (data){
  foodS = data.val();
}

function writeStock (x){

  database.ref('/').update({
    Food:x
  })
}
