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
console.log(gameBox)

for(let i = 0;i<=gameBox.length-1;i++){
    gameBox[i].addEventListener('click',tictactoe)
}

function tictactoe(e){
    console.log(e.srcElement)
    console.log(e.srcElement.firstChild)
    console.log(e.srcElement.firstChild.innerText==='') // logic that keeps players from playing in spots that are already taken
    if(lastPlay === undefined && e.srcElement.firstChild.innerText === ''){
        e.srcElement.firstChild.innerText = xInput
        lastPlay = xInput
    }else if(lastPlay === xInput && e.srcElement.firstChild.innerText === ''){
        e.srcElement.firstChild.innerText = oInput
        lastPlay = oInput    
    }else if(lastPlay === oInput && e.srcElement.firstChild.innerText === ''){
        e.srcElement.firstChild.innerText = xInput
        lastPlay = xInput    
    }
}