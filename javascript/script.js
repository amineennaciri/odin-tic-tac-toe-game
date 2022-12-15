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

