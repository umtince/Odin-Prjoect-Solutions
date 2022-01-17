const gameBoard = (function(){
    let board = ['','','',
                 '','','',
                 '','',''];
    
    function setGameBoard(playerObj,index){
        if(board[index] === ''){
            board[index] = playerObj.player;
            return true;
        }
        else{
            return false;
        }
    }

    function getGameBoard(){
        return board;
    }

    function clearGameBoard(){
        board = ['','','',
                 '','','',
                 '','',''];
    }

    return{
        setGameBoard,
        getGameBoard,
        clearGameBoard
    }
})();

const playerFactory = function(player){
    return{
        player
    }
}

const playerX = playerFactory('X');
const playerO = playerFactory('O');

const gameController = (function(){
    let playerQueue = [playerX,playerO];
    let flagRaised = false;

    function checkWin(){
        const winConditions = [[0,1,2],
                               [3,4,5],
                               [6,7,8],
                               [0,3,6],
                               [1,4,7],
                               [2,5,8],
                               [0,4,8],
                               [2,4,6]];
        
        let board = gameBoard.getGameBoard();

        if(winConditions.some((element) => {
            return (board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]) && board[element[0]] !== '' 
        })){
           return true;
        }
    }

    function checkOutOfMoves(){
        for (const iterator of gameBoard.getGameBoard()) {
            if(iterator === ''){
                return false;
            }
        }
        return true;
    }

    function move(index){
        if(!flagRaised){
            if(gameBoard.setGameBoard(playerQueue[0], index)){
                playerQueue.push(playerQueue.shift());
            }
    
            if(checkWin()){
                displayController.announceGameResult(playerQueue[1]);
                flagRaised = true;
            }
            else if(checkOutOfMoves()){
                displayController.announceGameResult('');
                flagRaised = true;
            }
        }
    }

    function restartGame(){
        playerQueue = [playerX,playerO];
        displayController.clearBoard();
        displayController.removeAnnouncement();
        flagRaised = false;
    }

    return{
        move,
        restartGame
    }
})();

const displayController = (function(){
    
    //cache DOM
    let gameBoardDiv = document.getElementById('game-board-div');
    let restartButton = document.getElementById('restart-button');
    let h2 = document.querySelector('h2');
    let pieceArr;

    function createBoard(){
        for(let i=0; i<9; i++){
            let pieceDiv = document.createElement('div');
            pieceDiv.setAttribute('class', 'piece');
            pieceDiv.addEventListener('click', getPlayerInput);
            gameBoardDiv.appendChild(pieceDiv);
        }
        pieceArr = document.querySelectorAll('.piece');
        restartButton.addEventListener('click', gameController.restartGame);
        render();
    }

    function clearBoard(){
        gameBoard.clearGameBoard();
        render();
    }

    function render(){
        let i = 0;
        pieceArr.forEach(element => {
            element.textContent = gameBoard.getGameBoard()[i];
            i++;
        });
    }

    function getPlayerInput(player){
        let index = Array.prototype.indexOf.call(pieceArr, this);
        gameController.move(index);
        render();
    }

    function announceGameResult(winner){
        if(winner.player === 'X'){
            h2.innerText = "Player X wins!";
        }
        else if(winner.player === 'O'){
            h2.innerText = "Player O wins!";
        }
        else{
            h2.innerText = "It's a draw!";
        }
    }

    function removeAnnouncement(){
        h2.innerText = '';
    }

    return{
        createBoard,
        clearBoard,
        announceGameResult,
        removeAnnouncement
    }
})();

displayController.createBoard();