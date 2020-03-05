function start() {
    var main = document.getElementsByClassName("container");
    for(var i = 0; i < main.length; i++){
        main[i].style.display = "none";
    }
    var title = document.getElementsByTagName("h1");
    for(var i = 0; i < title.length; i++){
        title[i].style.display = "none";
    }
}
function display_gameRules(){
    var gameRules = document.getElementsByClassName("rules");
    for(var i = 0; i < gameRules.length; i++){
        gameRules[i].style.display = "block";
    }
}
function startGame() {
    var gameRules = document.getElementsByClassName("gameRules");
    for(var i = 0; i < gameRules.length; i++){
        gameRules[i].style.display = "none";
    }
    var game = document.getElementsByClassName("game");
    for(var i = 0; i < game.length; i++){
        game[i].style.display = "block";
    }
}




(function(){
    'use strict'
    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");
        
    const gameData = {
        dice: ["images/1die.jpg", "images/2die.jpg", "images/3die.jpg", "images/4die.jpg", "images/5die.jpg","images/6die.jpg"],
        players:["player 1","player 2"],
        score: [0,0],
        roll1: 0,
        roll2:0,
        rollSum:0,
        index: 0,
        gameEnd:29
    }
    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        console.log(gameData.index);
        setUpTurn();
    });
    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener("click", function(){

            throwDice();

        });
            checkWinningCondition();
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.ceil(Math.random()*6);
        gameData.roll2 = Math.ceil(Math.random()*6);
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two 1's are rolled...
        if( gameData.rollSum === 2 ){
            game.innerHTML += "<P>Oh snap! Snake eyes!</p>";
            gameData.scroe[gameData.index] = 0;
            gameData.index ? gameData.index = 0: gameData.index = 1;
            setTimeout(function(){
                setUpTurn();
            },2000)
            
            
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            game.innerHTML += `<P>sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(function(){
                setUpTurn();
            },2000)
            
        }
        
        else {

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener("click", function(){ 
                throwDice();
            });

            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });

            checkWinningCondition();
            }
            console.log(gameData);
        }

        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} 
                wins with ${gameData.score[gameData.index]} points!</h2>`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game?";
            }
            else{  
                showCurrentScore();
            }
        }
        function showCurrentScore(){
                score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</p>`;
            }
}());