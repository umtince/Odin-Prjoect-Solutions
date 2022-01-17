const gameBoard = (function(){
    let board = ['','','',
                 '','','',
                 '','',''];

    const logMove = (player, index) =>{
        board[index] = player;
    }

    const getBoard = () =>{
        return board;
    }

    return{
        logMove,
        getBoard
    }
})();

const playerFactory = function(player){
    return{
        player
    }
}

const playerX = playerFactory('X');
const playerO = playerFactory('O');

const displayController = (function(){
    
    //cache DOM
    let gameBoardDiv = document.getElementById('game-board-div');

    function createGameBoard(){
        for(let i=0; i<9; i++){
            let pieceDiv = document.createElement('div');
            pieceDiv.setAttribute('class', 'piece');
            pieceDiv.addEventListener('click', getPlayerInput);
            gameBoardDiv.appendChild(pieceDiv);
        }
    }

    function getPlayerInput(){
        console.log("click piece");
    }

    return{
        createGameBoard
    }
})();

displayController.createGameBoard();
