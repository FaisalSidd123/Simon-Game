var a=0;
var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=0;
$(document).keypress(function(){
    if(a===0){
        nextSequence();
      a++;
    }
    
})


function nextSequence(){
    userClickedPattern=[];
    level++;
  
    
    $("h1").text("level "+level);
    randomNumber=Math.floor(Math.random()*4);
    
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
   

        $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
     var a='sounds/'+randomChosenColor+".mp3";
     playSound(a);
    }
    
    


$(".button").click(function(){  //kisi bhi button ko press krengai to yeh saari properties aaply hojayengi 
    
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    var a='sounds/'+userChosenColor+".mp3";
    playSound(a);
    animatePress(userChosenColor);

  
   checkAnswer(userClickedPattern.length-1);
    
 
});

function playSound(a){
    var tom1=new Audio(a);
    tom1.play();
}

function animatePress(currentcolor){
 $("."+currentcolor).addClass("pressed");
 setTimeout(function(){
    $("."+currentcolor).removeClass("pressed")
},100)
}
 
function checkAnswer(currentLevel){
   if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(gamePattern.length===userClickedPattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
   }
  
   else{
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
       var aab="sounds/wrong.mp3";
        playSound(aab);
        $("h1").text("Game Over, Press Any Key to Restart");

    },200);
  startOver();
  
}
}
function startOver(){
 level=0;
 gamePattern=[];
 a=0;
}
