var dog,sadDog,happyDog;
var foodobj,foodstock,addfood,feed
var lastfeed,feedtime,foods,food,firebase

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database()
  createCanvas(1000,400);
  

  foodobj = new food()

foodstock=database.ref('food')
foodstock.on("value",readstock)

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)

  addfood = createButton("addfood")
  addfood.position(800,95)
  addfood.mousePressed(addfood)

}

function draw() {
  background(46,139,87);

  foodobj.display()

  feedtime=database.ref('feedtime')
  feedtime.on("value",function(data){
    lastfeed=data.val()
  })

  fill (255,255,254)
  textSize (15)   
  if(lastfeed>=12){
    text("lastfeed:"  +lastfeed%12+ "PM",350,30)
   } else if(lastfeed==0){
      text("lastfed:12 AM",350,30)
  }else{
    text("lastfeed:"  +lastfeed+ "AM",350,30)
  }

 
}

//  function to read stock
function readstock(data){
  foods=data.val()
  foodobj.updateFoodStock(foods)
}

// function to update food stock and last feed time

function feedDog(){
  dog.addimage(happyDog)

  foodobj.updateFoodStock(foodobj.getFoodStock()-1)
  database.ref('/').update({
    food:foodobj.getFoodStock(),
  feedtime:hour ()
    })

}
//function to add food stock
function addfood(){
  foods++
  database.ref('/').update({
    food:foods
  })

}