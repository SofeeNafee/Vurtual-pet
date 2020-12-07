var dog;
var database,food;
var hungry,happy;
function preload(){
    hungry=loadImage("Dog.png");
    happy=loadImage("happy dog.png");
}
function setup(){
    createCanvas(800,800);
    database=firebase.database();

    dog = createSprite(400,400,10,10);

    dog.addImage (hungry);
    var foodref=database.ref('food');
    foodref.on("value",readfood,showeror);
}

function draw(){
    background("white");
    if(food!=undefined){
        
         if(keyDown(UP_ARROW)){
            changefood(food);

        }

    }
   
    drawSprites();
}

function changefood(x){
    if(x<=0){
        x=0;
    }else{
        x=x+1
        dog.addImage(happy);
    }
    database.ref('/').set({
        food:x

    })
}
function readfood(data){
    food=data.val();

}
function showeror(){
    console.log("could not read data base")
}