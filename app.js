let nameOne = "";
let nameTwo = "";
let nameThree= "";
const COMPUTER_NAME = "Computer";
let game2turn = [];
let playerOne2;
let playerTwo2;
const cellElements1 = document.querySelectorAll(".cell1")
const cellElements1Hard = document.querySelectorAll(".cell3")
const cellElements2 = document.querySelectorAll(".cell2")
const gameboard1 = $(".gameboard1")
const gameboard3 = $(".gameboard3")
const gameboard2 = $(".gameboard2")
const gameOverText1 = document.querySelector(".winner-text1")
const gameOverText2 = document.querySelector(".winner-text2")
const gameOverText3 = document.querySelector(".winner-text3")
let oTurn1;
let oTurn2;
let oTurn1Hard;
const X_CLASS = "x" ;
const O_CLASS = "o";
const X_CLASSHARD = "x" ;
const O_CLASSHARD = "o";
const WINNING_MOVES = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]


$( "#enter" ).click(function singlePlayerNameEntered(){
    nameOne = $('#user-input-one').val();
    if (nameOne.length > 1){
        $("#oneName").removeClass("enter");
        $(".singlePlayer").addClass("play");
        $(".onePlayerMode").addClass("option")
    }
})

$('#easyMode').click(function startEasyMode(){
    $(".onePlayerMode").removeClass("option")
    $(".gameboard1").addClass("play");
    updateText();
    startGameOne();
})
function startGameOne(){
    cellElements1.forEach(cell1 => {
        cell1.addEventListener('click', whenClicked1,{once:true})
    })
    hoverClass1();
}

function whenClicked1(){
    const cell1 = $( this ).click();
    const currentClass = function whosTurn1(){
        if (oTurn1){
            return O_CLASS
        }else{
           return X_CLASS
        }
    }
function placeComputerMark(){
    const boardArray = Array.from(cellElements1)
    let randomNumber = Math.floor(Math.random() * 8.9) 
        for (let i = randomNumber ; i < boardArray.length; i++){
            if (!boardArray[i].classList.contains(X_CLASS)&&!boardArray[i].classList.contains(O_CLASS)){
                 placeMark1(boardArray[i], currentClass)
                if (checkForWin1(currentClass())){
                    gameOver1(false)
                } else if (draw1()){
                        gameOver1(true)
                }else{
                    return true;
                }
            }
}}
    
placeMark1(cell1, currentClass)
    if (checkForWin1(currentClass())){
        gameOver1(false)
    } else if (draw1()){
            gameOver1(true)
    }else{
    switchTurn1()
    placeComputerMark()
    checkForWin1()
    switchTurn1()
    hoverClass1()
    }
}
function switchTurn1(){
    oTurn1 = !oTurn1
 }
function gameOver1(draw1){
    if (draw1){
        gameOverText1.innerText = "Draw!!"
    } else {
        gameOverText1.innerText = `${oTurn1 ? COMPUTER_NAME : nameOne} WINS!`
    }
    $(".game-over-single").addClass("show")
}
function draw1(){
    return [...cellElements1].every(cell1 =>{
        return cell1.classList.contains(O_CLASS) || cell1.classList.contains(X_CLASS)
    })
}
function placeMark1(cell, currentClass){
    $(cell).addClass(currentClass)
}
function hoverClass1(){
    gameboard1.removeClass(O_CLASS)
    gameboard1.removeClass(X_CLASS)
    if(oTurn1){
        gameboard1.addClass(O_CLASS)
    }else{
        gameboard1.addClass(X_CLASS)
    }
}
function checkForWin1(currentClass){
    return WINNING_MOVES.some(combination => {
        return combination.every(index => {
            return cellElements1[index].classList.contains(currentClass)
        })
    })}









$('#hardMode').click(function startHardMode(){
    $(".onePlayerMode").removeClass("option")
    $(".gameboard3").addClass("play");
    updateText();
    startHardGameOne();
})
function startHardGameOne(){
    cellElements1Hard.forEach(cell1Hard => {
        cell1Hard.addEventListener('click', whenClicked1Hard,{once:true})
    })
        hoverClass1Hard();
}

function whenClicked1Hard(){
    const cell1Hard = $( this ).click();
    const currentClassHard = function whosTurn1Hard(){
        if (oTurn1Hard){
            return O_CLASSHARD
            }else{
           return X_CLASSHARD
        }
    }
    function placeComputerMarkHard(){
        const boardArrayHard = Array.from(cellElements1Hard);
        const randomNumberHard = Math.floor(Math.random() * 8.9);
    
            for (let i = randomNumberHard ; i < boardArrayHard.length; i++){
                for (let i = 0; i < boardArrayHard[0].length ; i++ ){
                    
                }
                if (!boardArrayHard[i].classList.contains(X_CLASSHARD)&&!boardArrayHard[i].classList.contains(O_CLASSHARD)){
                     placeMark1Hard(boardArrayHard[i], currentClassHard)
                    if (checkForWin1Hard(currentClassHard())){
                        gameOver1Hard(false)
                    } else if (draw1Hard()){
                            gameOver1Hard(true)
                    }else{
                        return true;
                    }
                }
    }}
    placeMark1Hard(cell1Hard, currentClassHard)
    if (checkForWin1Hard(currentClassHard())){
        gameOver1Hard(false)
    } else if (draw1Hard()){
            gameOver1Hard(true)
    }else{
    switchTurn1Hard()
    placeComputerMarkHard()
    checkForWin1Hard()
    switchTurn1Hard()
    hoverClass1Hard()
    }
}
function switchTurn1Hard(){
    oTurn1Hard = !oTurn1Hard
 }
function gameOver1Hard(draw1Hard){
    if (draw1Hard){
        gameOverText3.innerText = "Draw!!"
    } else {
        gameOverText3.innerText = `${oTurn1Hard ? COMPUTER_NAME : nameOne} WINS!`
    }
    $(".game-over-hard").addClass("show")
}
function draw1Hard(){
    return [...cellElements1Hard].every(cell1Hard =>{
        return cell1Hard.classList.contains(O_CLASSHARD) || cell1Hard.classList.contains(X_CLASSHARD)
    })
}
function placeMark1Hard(cellHard, currentClassHard){
    $(cellHard).addClass(currentClassHard)
}
function hoverClass1Hard(){
    gameboard3.removeClass(O_CLASSHARD)
    gameboard3.removeClass(X_CLASSHARD)
    if(oTurn1Hard){
        gameboard3.addClass(O_CLASSHARD)
    }else{
        gameboard3.addClass(X_CLASSHARD)
    }
}
function checkForWin1Hard(currentClassHard){
    return WINNING_MOVES.some(combination => {
        return combination.every(index => {
            return cellElements1Hard[index].classList.contains(currentClassHard)
        })
    })}
    
    













    
$( "#twoEnter" ).click(function twoPlayerNameEntered(){
    nameTwo = $('#user-input-two').val();
    nameThree = $('#user-input-three').val();
    if ( nameTwo.length > 1 && nameThree.length > 1 )
    {
        $("#twoNames").removeClass("enter");
        $("#twoNames").removeClass("enter");
        $(".doublePlayer").addClass("play");
        $(".gameboard2").addClass("play");
        updateText();
        startGameTwo();
    }
})

function startGameTwo(){
    cellElements2.forEach(cell2 => {
        cell2.addEventListener('click', whenClicked2,{once:true})
    })
    whoGoesFirst2()
    hoverClass2();
}

function whoGoesFirst2(){
    let i = Math.floor(Math.random() * 3);
    if( i > 1){
        game2turn.push(nameTwo);
        game2turn.push(nameThree);
    }else{
        game2turn.push(nameThree);
        game2turn.push(nameTwo);
    }
     playerOne2 = game2turn[0]
     playerTwo2 = game2turn[1]
    }
function whenClicked2(){
    const cell2 = $( this ).click();
    const currentClass = function whosTurn2(){
        if (oTurn2){
            return O_CLASS
        }else{
           return X_CLASS
        }
    }
    placeMark2(cell2, currentClass)
    if (checkForWin2(currentClass())){
        gameOver2(false)
    } else if (draw2()){
            gameOver2(true)
    }else{
    switchTurn2()
    hoverClass2()
    }
}

function gameOver2(draw2){
    if (draw2){
        gameOverText2.innerText = "Draw!!"
    } else {
        gameOverText2.innerText = `${oTurn2 ? playerTwo2 : playerOne2} WINS!`
    }
    $(".game-over-double").addClass("show")
}

function draw2(){
    return [...cellElements2].every(cell2 =>{
        return cell2.classList.contains(O_CLASS) || cell2.classList.contains(X_CLASS)
    })
}

function placeMark2(cell2, currentClass){
    cell2.addClass(currentClass)
}
function switchTurn2(){
    oTurn2 = !oTurn2
 }

function hoverClass2(){
    gameboard2.removeClass(O_CLASS)
    gameboard2.removeClass(X_CLASS)
    if(oTurn2){
        gameboard2.addClass(O_CLASS)
    }else{
        gameboard2.addClass(X_CLASS)
    }
}
    function checkForWin2(currentClass){
        return WINNING_MOVES.some(combination => {
            return combination.every(index => {
                return cellElements2[index].classList.contains(currentClass)
            })
        })}
function updateText(){
    $('#x1turn').text(`1st Player: ${nameOne}`);
    $('#x2turn').text(`1st Player: ${playerOne2}`);
    $('#o2turn').text(`2nd Player: ${playerTwo2}`);
    $('#o1turn').text(`2nd Player: ${COMPUTER_NAME}`);
}

$( "#one" ).click(function startPlayerOne() {
$(".start.up").removeClass("up");

$("#oneName").addClass("enter")
})

$( "#twoEnter" ).click(function twoPlayerNameEntered(){
    nameTwo = $('#user-input-two').val();
    nameThree = $('#user-input-three').val();
    if ( nameTwo.length > 1 && nameThree.length > 1 )
    {
        $("#twoNames").removeClass("enter");
        $(".doublePlayer").addClass("play");
        $(".gameboard2").addClass("play");
        updateText();
    }
})

$( "#two" ).click(function startPlayerTwo() {
    $(".start.up").removeClass("up");
    $("#twoNames").addClass("enter")
})

$( "#rematch1").click(function restart1(){
    $(".game-over-single").removeClass("show")
    $(".cell1").removeClass("o")
    $(".cell1").removeClass("x")
    startGameOne()
})
$( "#rematch2").click(function restart2(){
    $(".game-over-double").removeClass("show")
    $(".cell2").removeClass("o")
    $(".cell2").removeClass("x")
    startGameTwo()
})

$( "#rematch3").click(function restart1Hard(){
    $(".game-over-hard").removeClass("show")
    $(".cell3").removeClass("o")
    $(".cell3").removeClass("x")
    startHardGameOne()
})

$( "#new-game1").click(function newGame1(){
    $(".game-over-single").removeClass("show")
    $(".gameboard1").removeClass("play")
    $(".gameboard1").removeClass("x")
    $(".gameboard1").removeClass("o")
    $(".gameboard2").removeClass("play")
    $(".gameboard2").removeClass("x")
    $(".gameboard2").removeClass("o")
    $(".gameboard3").removeClass("play")
    $(".gameboard3").removeClass("x")
    $(".gameboard3").removeClass("o")
    $(".cell1").removeClass("o")
    $(".cell1").removeClass("x")
    $(".doublePlayer").removeClass("play")
    $(".singlePlayer").removeClass("play")
    $("#user-input-one").val(" ")
    $("#user-input-two").val(" ")
    $("#user-input-three").val(" ")
    $(".start").addClass("up")
    
})
$( "#new-game2").click(function newGame2(){
    game2turn = [];
    playerOne2;
    playerTwo2;
    $(".game-over-double").removeClass("show")
    $(".gameboard2").removeClass("play")
    $(".gameboard2").removeClass("x")
    $(".gameboard2").removeClass("o")
    $(".gameboard1").removeClass("play")
    $(".gameboard1").removeClass("x")
    $(".gameboard1").removeClass("o")
    $(".gameboard3").removeClass("play")
    $(".gameboard3").removeClass("x")
    $(".gameboard3").removeClass("o")
    $(".cell2").removeClass("o")
    $(".cell2").removeClass("x")
    $(".doublePlayer").removeClass("play")
    $(".singlePlayer").removeClass("play")
    $("#user-input-one").val(" ")
    $("#user-input-two").val(" ")
    $("#user-input-three").val(" ")
    $(".start").addClass("up")
    
})

$( "#new-game3").click(function newGame1Hard(){
    $(".game-over-hard").removeClass("show")
    $(".gameboard1").removeClass("play")
    $(".gameboard1").removeClass("x")
    $(".gameboard1").removeClass("o")
    $(".gameboard2").removeClass("play")
    $(".gameboard2").removeClass("x")
    $(".gameboard2").removeClass("o")
    $(".gameboard3").removeClass("play")
    $(".gameboard3").removeClass("x")
    $(".gameboard3").removeClass("o")
    $(".cell3").removeClass("o")
    $(".cell3").removeClass("x")
    $(".doublePlayer").removeClass("play")
    $(".singlePlayer").removeClass("play")
    $("#user-input-one").val(" ")
    $("#user-input-two").val(" ")
    $("#user-input-three").val(" ")
    $(".start").addClass("up")
})
