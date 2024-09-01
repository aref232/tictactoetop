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
    
    function displayController(){
        let container = document.querySelector('.container');
        for (let i = 0; i < 9; i++){
            let square = document.createElement('button');
            square.classList.add('btn');
            container.append(square);
        }

    }


    function game(player1, player2){
        let gameboard = Array(9).fill(null);
        const playerX = createPlayer(player1);
        const playerO = createPlayer(player2);

        let xIsNext = true;
        let result = null;
        let squares = Array.from(document.querySelectorAll('.btn'));
        for (let [index, square] of squares.entries()){
            square.addEventListener('click', () => {
                console.log('meow');
                // Check validity
                if (gameboard.every(square => square !== null) || result){
                    return;
                }
                if (gameboard[index]){
                    alert('Unavailable Square')
                    return;
                }
                
                gameboard[index] = xIsNext ? 'x' : 'o';
                square.innerHTML = xIsNext ? 'x' : 'o';

                result = checkWinner(gameboard);
                xIsNext = !xIsNext;
                
                if (result){
                    let winner = result === 'x' ? playerX : playerO;
                    alert(winner.name + ' wins!');
                }
                
                if (gameboard.every(square => square !== null) && !result){
                    alert("It's a tie!");
                    return
                }
            })
    
            // else {
            //     alert("It's a tie!")
            // }
            }
            
            // Check move validity

    }
    // ('Aref', 'Omar')

    displayController();
    game('aref', 'omar');
    

})