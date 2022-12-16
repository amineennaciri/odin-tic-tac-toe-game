/* previous work
let gameboard = {}// create object
// properties
gameboard.data = []
gameboard.displayController = function(){
    console.log('display')
}

// factory
function GameboardGame(playerName){
    this.playerName = playerName
    this.honk = function(){
        console.log('beep')
    }
}
*/
const gameBox = document.querySelectorAll('.case')
const scoreBoard = document.querySelector('.result')
const btnStart = document.querySelector('.start')
const btnRestart = document.querySelector('.restart')
const btnPlayerId = document.querySelector('.playerId')
const xInput = 'x'
const oInput = 'o'
let playerOne;
let playerTwo;
let lastPlay;
let firstPlay;
let playCount = 0;
console.log(gameBox)

// event listeners
for(let i = 0;i<=gameBox.length-1;i++){
    gameBox[i].addEventListener('click',tictactoe)
}
btnStart.addEventListener('click', start)
btnRestart.addEventListener('click', restart)

// this is the function that render the content of the gameboard.
function tictactoe(e){
    if(scoreBoard.innerText!=''){
        return ''
    }
    console.log(e.srcElement)
    console.log(e.srcElement.firstChild)
    console.log(e.srcElement.firstChild.innerText==='') 
    // logic that keeps players from playing in spots that are already taken
    // and also enable players to play on a "1 turn principle"
    if(lastPlay === undefined && e.srcElement.firstChild.innerText === ''){
        if(firstPlay === playerOne){
            e.srcElement.firstChild.innerText = xInput
            lastPlay = xInput
        }else if(firstPlay === playerTwo){
            e.srcElement.firstChild.innerText = oInput
            lastPlay = oInput
        }
        playCount++;
    }else if(lastPlay === xInput && e.srcElement.firstChild.innerText === ''){
        e.srcElement.firstChild.innerText = oInput
        lastPlay = oInput
        playCount++;    
    }else if(lastPlay === oInput && e.srcElement.firstChild.innerText === ''){
        e.srcElement.firstChild.innerText = xInput
        lastPlay = xInput
        playCount++;    
    }
    if(playCount>=5){
        checkWin();// call this function
    }
    // which players turn? the order flip vice versa depending on who played first
    if(firstPlay === playerOne){
        if(playCount%2==0 && scoreBoard.innerText === ''){
            btnPlayerId.innerText = `It's ${playerOne}'s turn now!`;
        }else if(playCount%2!=0 && scoreBoard.innerText === ''){
            btnPlayerId.innerText = `It's ${playerTwo}'s turn now!`
        }
    }else if(firstPlay === playerTwo){
        if(playCount%2!=0 && scoreBoard.innerText === ''){
            btnPlayerId.innerText = `It's ${playerOne}'s turn now!`;
        }else if(playCount%2==0 && scoreBoard.innerText === ''){
            btnPlayerId.innerText = `It's ${playerTwo}'s turn now!`
        }
    }
}
// this is the function that check for for when the game is over!
function checkWin(){
    if(gameBox[0].firstChild.innerText!=''&& gameBox[0].firstChild.innerText === gameBox[1].firstChild.innerText && 
    gameBox[1].firstChild.innerText === gameBox[2].firstChild.innerText){
        //alert('you win')
        //scoreBoard.innerText = 'You Win !'
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        return gameBox[0].firstChild.innerText===xInput? scoreBoard.innerText = `${playerOne} Win !` : scoreBoard.innerText = `${playerTwo} Win !`
    } else if(gameBox[3].firstChild.innerText!=''&& gameBox[3].firstChild.innerText === gameBox[4].firstChild.innerText && 
    gameBox[4].firstChild.innerText === gameBox[5].firstChild.innerText){
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        return gameBox[0].firstChild.innerText===xInput? scoreBoard.innerText = `${playerOne} Win !` : scoreBoard.innerText = `${playerTwo} Win !`
    } else if(gameBox[6].firstChild.innerText!=''&& gameBox[6].firstChild.innerText === gameBox[7].firstChild.innerText && 
    gameBox[7].firstChild.innerText === gameBox[8].firstChild.innerText){
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        return gameBox[0].firstChild.innerText===xInput? scoreBoard.innerText = `${playerOne} Win !` : scoreBoard.innerText = `${playerTwo} Win !`
    } else if(gameBox[0].firstChild.innerText!=''&& gameBox[0].firstChild.innerText === gameBox[3].firstChild.innerText && 
    gameBox[3].firstChild.innerText === gameBox[6].firstChild.innerText){
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        return gameBox[0].firstChild.innerText===xInput? scoreBoard.innerText = `${playerOne} Win !` : scoreBoard.innerText = `${playerTwo} Win !`
    } else if(gameBox[1].firstChild.innerText!=''&& gameBox[1].firstChild.innerText === gameBox[4].firstChild.innerText && 
    gameBox[4].firstChild.innerText === gameBox[7].firstChild.innerText){
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        return gameBox[0].firstChild.innerText===xInput? scoreBoard.innerText = `${playerOne} Win !` : scoreBoard.innerText = `${playerTwo} Win !`
    } else if(gameBox[2].firstChild.innerText!=''&& gameBox[2].firstChild.innerText === gameBox[5].firstChild.innerText && 
    gameBox[5].firstChild.innerText === gameBox[8].firstChild.innerText){
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        return gameBox[0].firstChild.innerText===xInput? scoreBoard.innerText = `${playerOne} Win !` : scoreBoard.innerText = `${playerTwo} Win !`
    } else if(gameBox[0].firstChild.innerText!=''&& gameBox[0].firstChild.innerText === gameBox[4].firstChild.innerText && 
    gameBox[4].firstChild.innerText === gameBox[8].firstChild.innerText){
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        return gameBox[0].firstChild.innerText===xInput? scoreBoard.innerText = `${playerOne} Win !` : scoreBoard.innerText = `${playerTwo} Win !`
    } else if(gameBox[6].firstChild.innerText!=''&& gameBox[6].firstChild.innerText === gameBox[4].firstChild.innerText && 
    gameBox[4].firstChild.innerText === gameBox[2].firstChild.innerText){
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        return gameBox[0].firstChild.innerText===xInput? scoreBoard.innerText = `${playerOne} Win !` : scoreBoard.innerText = `${playerTwo} Win !`
    }else if(playCount===9){
        btnPlayerId.innerText = 'Click on restart to play again!'
        btnPlayerId.style.backgroundColor = 'red'
        scoreBoard.innerText = `It's a Tie!`
    }
}

function start(){
    playerOne = prompt('Player 1, please enter your name.')
    playerTwo = prompt('Player 2, please enter your name.')
    document.querySelector('.main-content').style.visibility = 'visible'
    document.querySelector('.score-board').style.visibility = 'visible'
    btnPlayerId.innerText = `It's ${playerOne}'s turn now!`
    firstPlay = playerOne;
}

function restart(){
    // init the game to it's first state
    for(let i = 0;i<=gameBox.length-1;i++){
        gameBox[i].firstChild.innerText = ''
    }
    scoreBoard.innerText = "";
    lastPlay = undefined;
    playCount = 0;
    btnPlayerId.style.backgroundColor = 'black'
    if(firstPlay === playerOne){
        btnPlayerId.innerText = `It's ${playerTwo}'s turn now!`
        firstPlay = playerTwo
    }else if(firstPlay === playerTwo){
        btnPlayerId.innerText = `It's ${playerOne}'s turn now!`
        firstPlay = playerOne
    }
    
}