// event listener constructor
function CreateEventlistener(varA,funct){
    this.varA = varA
    this.funct = funct
    this.addEventList = function(){
        if(varA.length!=undefined){
            for(let i = 0;i<=varA.length-1;i++){
                this.varA[i].addEventListener('click',this.funct)
            }   
        }else{
            this.varA.addEventListener('click',this.funct)
        }
    }
}

// player constructor
function GameboardGame(playerName){
    this.playerName = playerName
    this.nameInput = function(){
        return prompt(`${this.playerName}, please enter your name.`)
    }
}

// create gameboard object
let gameboard = {}
// properties
gameboard.gameBox = document.querySelectorAll('.case')
gameboard.scoreBoard = document.querySelector('.result')
gameboard.btnStart = document.querySelector('.start')
gameboard.btnRestart = document.querySelector('.restart')
gameboard.btnPlayerId = document.querySelector('.playerId')
gameboard.xInput = 'x'
gameboard.oInput = 'o'
gameboard.lastPlay = undefined
gameboard.firstPlay = undefined
gameboard.playCount = 0;
gameboard.playerOne = undefined;
gameboard.playerTwo = undefined;

// methods
gameboard.start = function(){
    gameboard.playerOne = (new GameboardGame('Player 1')).nameInput(); // create player
    gameboard.playerTwo = (new GameboardGame('Player 2')).nameInput(); // create player
    document.querySelector('.main-content').style.visibility = 'visible'
    document.querySelector('.score-board').style.visibility = 'visible'
    gameboard.btnPlayerId.innerText = `It's ${gameboard.playerOne}'s turn now!`
    gameboard.firstPlay = gameboard.playerOne;//
}
gameboard.restart = function(){
    // init the game to it's first state
    for(let i = 0;i<=gameboard.gameBox.length-1;i++){
        gameboard.gameBox[i].firstChild.innerText = ''
    }
    gameboard.scoreBoard.innerText = "";
    gameboard.lastPlay = undefined;
    gameboard.playCount = 0;
    gameboard.btnPlayerId.style.backgroundColor = 'black'
    if(gameboard.firstPlay === gameboard.playerOne){
        gameboard.btnPlayerId.innerText = `It's ${gameboard.playerTwo}'s turn now!`
        gameboard.firstPlay = gameboard.playerTwo
    }else if(gameboard.firstPlay === gameboard.playerTwo){
        gameboard.btnPlayerId.innerText = `It's ${gameboard.playerOne}'s turn now!`
        gameboard.firstPlay = gameboard.playerOne
    }
    
}

gameboard.tictactoe = function(e){
    if(gameboard.scoreBoard.innerText!=''){
        return ''
    }
/*     console.log(e.srcElement)
    console.log(e.srcElement.firstChild)
    console.log(e.srcElement.firstChild.innerText==='')  */
    // logic that keeps players from playing in spots that are already taken
    // and also enable players to play on a "1 turn principle"
    if(gameboard.lastPlay === undefined && e.srcElement.firstChild.innerText === ''){
        if(gameboard.firstPlay === gameboard.playerOne){
            e.srcElement.firstChild.innerText = gameboard.xInput
            gameboard.lastPlay = gameboard.xInput
        }else if(gameboard.firstPlay === gameboard.playerTwo){
            e.srcElement.firstChild.innerText = gameboard.oInput
            gameboard.lastPlay = gameboard.oInput
        }
        gameboard.playCount++;
    }else if(gameboard.lastPlay === gameboard.xInput && e.srcElement.firstChild.innerText === ''){
        e.srcElement.firstChild.innerText = gameboard.oInput
        gameboard.lastPlay = gameboard.oInput
        gameboard.playCount++;    
    }else if(gameboard.lastPlay === gameboard.oInput && e.srcElement.firstChild.innerText === ''){
        e.srcElement.firstChild.innerText = gameboard.xInput
        gameboard.lastPlay = gameboard.xInput
        gameboard.playCount++;    
    }
    if(gameboard.playCount>=5){
        gameboard.checkWin();// call this function
    }
    // which players turn? the order flip vice versa depending on who played first
    if(gameboard.firstPlay === gameboard.playerOne){
        if(gameboard.playCount%2==0 && gameboard.scoreBoard.innerText === ''){
            gameboard.btnPlayerId.innerText = `It's ${gameboard.playerOne}'s turn now!`;
        }else if(gameboard.playCount%2!=0 && gameboard.scoreBoard.innerText === ''){
            gameboard.btnPlayerId.innerText = `It's ${gameboard.playerTwo}'s turn now!`
        }
    }else if(gameboard.firstPlay === gameboard.playerTwo){
        if(gameboard.playCount%2!=0 && gameboard.scoreBoard.innerText === ''){
            gameboard.btnPlayerId.innerText = `It's ${gameboard.playerOne}'s turn now!`;
        }else if(gameboard.playCount%2==0 && gameboard.scoreBoard.innerText === ''){
            gameboard.btnPlayerId.innerText = `It's ${gameboard.playerTwo}'s turn now!`
        }
    }
}
// this is the function that check for for when the game is over!
gameboard.checkWin = function(){
    if(gameboard.gameBox[0].firstChild.innerText!=''&& gameboard.gameBox[0].firstChild.innerText === gameboard.gameBox[1].firstChild.innerText && 
    gameboard.gameBox[1].firstChild.innerText === gameboard.gameBox[2].firstChild.innerText){
        //alert('you win')
        //scoreBoard.innerText = 'You Win !'
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        return gameboard.gameBox[0].firstChild.innerText===gameboard.xInput? gameboard.scoreBoard.innerText = `${gameboard.playerOne} Win !` : gameboard.scoreBoard.innerText = `${gameboard.playerTwo} Win !`
    } else if(gameboard.gameBox[3].firstChild.innerText!=''&& gameboard.gameBox[3].firstChild.innerText === gameboard.gameBox[4].firstChild.innerText && 
    gameboard.gameBox[4].firstChild.innerText === gameboard.gameBox[5].firstChild.innerText){
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        return gameboard.gameBox[0].firstChild.innerText===gameboard.xInput? gameboard.scoreBoard.innerText = `${gameboard.playerOne} Win !` : gameboard.scoreBoard.innerText = `${gameboard.playerTwo} Win !`
    } else if(gameboard.gameBox[6].firstChild.innerText!=''&& gameboard.gameBox[6].firstChild.innerText === gameboard.gameBox[7].firstChild.innerText && 
    gameboard.gameBox[7].firstChild.innerText === gameboard.gameBox[8].firstChild.innerText){
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        return gameboard.gameBox[0].firstChild.innerText===gameboard.xInput? gameboard.scoreBoard.innerText = `${gameboard.playerOne} Win !` : gameboard.scoreBoard.innerText = `${gameboard.playerTwo} Win !`
    } else if(gameboard.gameBox[0].firstChild.innerText!=''&& gameboard.gameBox[0].firstChild.innerText === gameboard.gameBox[3].firstChild.innerText && 
    gameboard.gameBox[3].firstChild.innerText === gameboard.gameBox[6].firstChild.innerText){
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        return gameboard.gameBox[0].firstChild.innerText===gameboard.xInput? gameboard.scoreBoard.innerText = `${gameboard.playerOne} Win !` : gameboard.scoreBoard.innerText = `${gameboard.playerTwo} Win !`
    } else if(gameboard.gameBox[1].firstChild.innerText!=''&& gameboard.gameBox[1].firstChild.innerText === gameboard.gameBox[4].firstChild.innerText && 
    gameboard.gameBox[4].firstChild.innerText === gameboard.gameBox[7].firstChild.innerText){
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        return gameboard.gameBox[0].firstChild.innerText===gameboard.xInput? gameboard.scoreBoard.innerText = `${gameboard.playerOne} Win !` : gameboard.scoreBoard.innerText = `${gameboard.playerTwo} Win !`
    } else if(gameboard.gameBox[2].firstChild.innerText!=''&& gameboard.gameBox[2].firstChild.innerText === gameboard.gameBox[5].firstChild.innerText && 
    gameboard.gameBox[5].firstChild.innerText === gameboard.gameBox[8].firstChild.innerText){
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        return gameboard.gameBox[0].firstChild.innerText===gameboard.xInput? gameboard.scoreBoard.innerText = `${gameboard.playerOne} Win !` : gameboard.scoreBoard.innerText = `${gameboard.playerTwo} Win !`
    } else if(gameboard.gameBox[0].firstChild.innerText!=''&& gameboard.gameBox[0].firstChild.innerText === gameboard.gameBox[4].firstChild.innerText && 
    gameboard.gameBox[4].firstChild.innerText === gameboard.gameBox[8].firstChild.innerText){
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        return gameboard.gameBox[0].firstChild.innerText===gameboard.xInput? gameboard.scoreBoard.innerText = `${gameboard.playerOne} Win !` : gameboard.scoreBoard.innerText = `${gameboard.playerTwo} Win !`
    } else if(gameboard.gameBox[6].firstChild.innerText!=''&& gameboard.gameBox[6].firstChild.innerText === gameboard.gameBox[4].firstChild.innerText && 
    gameboard.gameBox[4].firstChild.innerText === gameboard.gameBox[2].firstChild.innerText){
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        return gameboard.gameBox[0].firstChild.innerText===gameboard.xInput? gameboard.scoreBoard.innerText = `${gameboard.playerOne} Win !` : gameboard.scoreBoard.innerText = `${gameboard.playerTwo} Win !`
    }else if(gameboard.playCount===9){
        gameboard.btnPlayerId.innerText = 'Click on restart to play again!'
        gameboard.btnPlayerId.style.backgroundColor = 'red'
        gameboard.scoreBoard.innerText = `It's a Tie!`
    }
}

// properties tied to events | create event listener
// they are added last, because functions such as start, restart and tictactoe need to be declared first
gameboard.tictactoeEvent = new CreateEventlistener(gameboard.gameBox,gameboard.tictactoe).addEventList();
gameboard.btnStartEvent = new CreateEventlistener(gameboard.btnStart,gameboard.start).addEventList();
gameboard.btnRestartEvent = new CreateEventlistener(gameboard.btnRestart,gameboard.restart).addEventList();