var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var gameStart = false;
var level = 0;

$(document).keypress(function(){
    if (!gameStart){
        $("#level-title").text("Level "+level);
        nextSequence();
        gameStart = true;
    }
})

$(".btn").click(function(){
    var userChoseColour = $(this).attr("id") ;
    userClickedPattern.push(userChoseColour);
    playSound(userChoseColour);
    animatePress(userChoseColour)
    checkAnswer(userClickedPattern.length-1);
})


function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }else{
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");   
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoseColour = buttonColours[randomNumber];
    gamePattern.push(randomChoseColour);
    $("#"+randomChoseColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoseColour);
}

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3")
    audio.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);    
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStart = false;
}


