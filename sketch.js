var canvas;

var contestantCount,database, quiz, question ,contestant ; 
var gameState = 0;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);


// Quiz.getState();
// Quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount===4){
    Quiz.update();
  }
  if(gameState===1){
    clear();
  Quiz.play ();
  }
  
}
