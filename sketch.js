var database,backgroundImage;

var form,game,player;

var playerCount;
var gameState=0;

function setup(){

    database=firebase.database();
    createCanvas(400,400);
    game =new Game();
    game.getState();
    game.start();
}

function draw(){
    background("black");
   
}
