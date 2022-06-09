document.addEventListener('DOMContentLoaded', () =>{
    let squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.addEventListener('click', squareClick)
    })

    

})

function squareClick(e) {
    let square = e.target
    let position = square.id
    
    
    if(squareMove(position)) {
        setTimeout(() =>{
            alert(`GameOver - O jogador ${playerTime} venceu a partida com a Sequência => ${test[0]+1}, ${test[1]+1}, ${test[2]+1}`)
        }, 10)
         
    }

    squareUpdate()
}

let arrayWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let test
function isWin() {
    
    for(let i = 0; i < arrayWin.length; i++){
        test = arrayWin[i]
        let pos1 = test[0]
        let pos2 = test[1]
        let pos3 = test[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            return true
        } 
    } 
    return false

}



function squareUpdate() {
            let squares = document.querySelectorAll(".square")
            squares.forEach((square) => {
            let position = square.id 
            let symbol = board[position]
            
            if(symbol != "") {
                square.innerHTML = `<div class='${symbol}'></div>`
            }
            
            })
            
    
    
}

function restart() {

    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
            square.innerHTML = ""
            board = ["", "", "", "", "", "", "", "", ""]
            playerTime = 0
            gameOver = false
    })   

}

let buttonRestart = document.getElementById("restart")
buttonRestart.addEventListener("click", ()=>{
    restart()
})