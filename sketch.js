const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg ="sunrise.png"; 

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour % 12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour % 12 + " AM", 50,100);
    }

}

/*async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    //change the data in JSON format and store it in variable responseJSON
    var datetime= responseJSON.datetime
    var hour= datetime.slice(11,13);
    
    //fetch datetime from responseJSON
    
    

    // slice the datetime to extract hour
    
    // setting backgroundn according to the time
    
    if(hour>=0 && hour<6 ){
        bg = "dawn.png";
    }
    
    else if(hour>=6 && hour<14){
        bg= "morning.png";
    }
    
    else if(hour>=14 && hour<18){
        bg="dusk.png";
    }

    else{
        bg="night.png";
    }
    
    backgroundImg = loadImage(bg);
}*/

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var j = await response.json();
    var daytime = j.datetime;
     hour =  daytime.slice(11,13);
  /* if(hour <= 7 && hour >= 0){
        bg = "dawn.png";
   }
   else if(hour <= 12 && hour >= 8){
        bg = "morning.png";
   }
   else if(hour <= 15 && hour >= 12){
        bg = "afternoon.png";
   }
   else if(hour <= 18 && hour >= 15){
        bg = "dusk.png";
   }
   else {
        bg = "night.png";
   }*/

   
   backgroundimage = loadImage(bg);
    console.log(hour);

}