// define variables & add functions
const displayCurrentPlayer = document.querySelector("#currentPlayerNum");
const result = document.querySelector('#result')
let currentPlayer = 1
const circle = document.querySelectorAll('.items')


//functions, change colors as players are changing
    for(let i = 0; i < circle.length; i++) {
        circle[i].addEventListener("click", (e) => {
    if(currentPlayer === 1){
        e.target.classList.toggle('gold')
        circle[i].classList.add('playerOne')
        currentPlayer=2
        displayCurrentPlayer.innerHTML = currentPlayer
        checkWinner()
}  else{
        e.target.classList.toggle('red')
        circle[i].classList.add('playerTwo')
        currentPlayer=1
        displayCurrentPlayer.innerHTML = currentPlayer
        checkWinner()
}
    }, {once: true})
}   
         

//42 variations of wins,  grid is 6*7 

let row1 = ['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6']
let row2 = ['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6']
let row3 = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6']
let row4 = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6']
let row5 = ['e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6']
let row6 = ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6']

let col1 = ['a0', 'b0', 'c0', 'd0', 'e0', 'f0']
let col2 = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1']
let col3 = ['a3', 'b3', 'c3', 'd3', 'e3', 'f3']
let col4 = ['a4', 'b4', 'c4', 'd4', 'e4', 'f4']
let col5 = ['a5', 'b5', 'c5', 'd5', 'e5', 'f5']
let col6 = ['a6', 'b6', 'c6', 'd6', 'e6', 'f6']
let col7 = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7']




const winningCombo = [
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
];

//winning conditions, not including a draw function. 
function checkWinner () {
    for (let y = 0; y < winningCombo.length; y++){
        const box1 = circle[winningCombo[y][0]]
        const box2 = circle[winningCombo[y][1]]
        const box3 = circle[winningCombo[y][2]]
        const box4 = circle[winningCombo[y][3]]
    
    if (box1.classList.contains('playerOne') && 
        box2.classList.contains('playerOne') &&
        box3.classList.contains('playerOne') &&
        box4.classList.contains('playerOne')
    ){
        result.innerText='Player One Wins' 
        
    }
    if (box1.classList.contains('playerTwo') && 
        box2.classList.contains('playerTwo') &&
        box3.classList.contains('playerTwo') &&
        box4.classList.contains('playerTwo')
    ){
        result.innerText = 'The Queen Wins! Back to the cell you go.'
        
    }
}
}

//Decided not to mess with a restart button. 


//source: winningCombo, google. Cant find the source :(