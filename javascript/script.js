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
const xInput = 'x'
const oInput = 'o'
let lastPlay;
let playCount = 0;
console.log(gameBox)

for(let i = 0;i<=gameBox.length-1;i++){
    gameBox[i].addEventListener('click',tictactoe)
}

function tictactoe(e){
    console.log(e.srcElement)
    console.log(e.srcElement.firstChild)
    console.log(e.srcElement.firstChild.innerText==='') 
    // logic that keeps players from playing in spots that are already taken
    // and also enable players to play on a "1 turn principle"
    if(lastPlay === undefined && e.srcElement.firstChild.innerText === ''){
        e.srcElement.firstChild.innerText = xInput
        lastPlay = xInput
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
}

function checkWin(){
    if(gameBox[0].firstChild.innerText!=''&& gameBox[0].firstChild.innerText === gameBox[1].firstChild.innerText && 
    gameBox[1].firstChild.innerText === gameBox[2].firstChild.innerText){
        alert('you win')
    } else if(gameBox[3].firstChild.innerText!=''&& gameBox[3].firstChild.innerText === gameBox[4].firstChild.innerText && 
    gameBox[4].firstChild.innerText === gameBox[5].firstChild.innerText){
        alert('you win')
    } else if(gameBox[6].firstChild.innerText!=''&& gameBox[6].firstChild.innerText === gameBox[7].firstChild.innerText && 
    gameBox[7].firstChild.innerText === gameBox[8].firstChild.innerText){
        alert('you win')
    } else if(gameBox[0].firstChild.innerText!=''&& gameBox[0].firstChild.innerText === gameBox[3].firstChild.innerText && 
    gameBox[3].firstChild.innerText === gameBox[6].firstChild.innerText){
        alert('you win')
    } else if(gameBox[1].firstChild.innerText!=''&& gameBox[1].firstChild.innerText === gameBox[4].firstChild.innerText && 
    gameBox[4].firstChild.innerText === gameBox[7].firstChild.innerText){
        alert('you win')
    } else if(gameBox[2].firstChild.innerText!=''&& gameBox[2].firstChild.innerText === gameBox[5].firstChild.innerText && 
    gameBox[5].firstChild.innerText === gameBox[8].firstChild.innerText){
        alert('you win')
    } else if(gameBox[0].firstChild.innerText!=''&& gameBox[0].firstChild.innerText === gameBox[4].firstChild.innerText && 
    gameBox[4].firstChild.innerText === gameBox[8].firstChild.innerText){
        alert('you win')
    } else if(gameBox[6].firstChild.innerText!=''&& gameBox[6].firstChild.innerText === gameBox[4].firstChild.innerText && 
    gameBox[4].firstChild.innerText === gameBox[2].firstChild.innerText){
        alert('you win')
    }else if(playCount===9){
        alert(`it's a tie!`)
    }
}