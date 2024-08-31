document.addEventListener('DOMContentLoaded', ()=>{
    
    function createPlayer(name){
        let score = 0;
        return {name, score}
    }
    
    function checkWinner(gameboard){
        let winningLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        
        for (const line of winningLines) {
            if (gameboard[line[0]] && 
                gameboard[line[0]] === gameboard[line[1]] && 
                gameboard[line[0]] === gameboard[line[2]]){

                return gameboard[line[0]];
            }
        };
        return null 
    }

    // function checkTie(gameboard){
    //     if gameboard.every
    // }

    (function game(player1, player2){
        let gameboard = Array(9).fill(null);
        const playerX = createPlayer(player1);
        const playerY = createPlayer(player2);

        let xIsNext = true;
        let result = null;
        while (result === null){
            let move = parseInt(prompt('Input next move(0-8):'));
            
            // Check move validity
            if (gameboard[move]){
                alert('Unavailable Space')
                continue;
            }
            else if (move < 0 || move > 8){
                alert('Choose a proper value')
                continue;
            }
            else {
                gameboard[move] = xIsNext ? 'x' : 'y';
            }

            result = checkWinner(gameboard);
            xIsNext = !xIsNext;
            
            if (gameboard.every(square => square !== null)){
                break;
            }
        }

        if (result){
            let winner = result === 'x' ? playerX : playerY;
            alert(winner + ' wins!');
        }
        else {
            alert("It's a tie!")
        }

    })('Aref', 'Omar')
})