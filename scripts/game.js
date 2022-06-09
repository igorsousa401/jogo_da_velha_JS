let board = ["", "", "", "", "", "", "", "", ""]
let symbols = ["x", "o"]
let playerTime = 0
let gameOver = false


function squareMove(position) {
    if(gameOver){
        return
    }

    if(board[position] == ""){
        board[position] = symbols[playerTime]

        
        gameOver = isWin()

        if(!gameOver) {
            if(playerTime == 0) {
                playerTime = 1
            } else{
                playerTime = 0
            }
        }
    } else{
        alert("O quadrado precisa está vazio. Selecione outro quadrado!")
    }
    return gameOver
}

function restart() {

    board = ["", "", "", "", "", "", "", "", ""]
    playerTime = 0
    gameOver = false


}