let pacmanPosition = round(n/2)-1;
let fruitPosition = round(n*4/3)-1;
let ghostPosition = n-2;

function createGame(n){
    let board = new Array(n).fill(".");
    let pacman = "C";
    let fruit = "@";
    let ghost = "^";
    board[pacmanPosition] = pacman;
    board[fruitPosition] = fruit;
    board[ghostPosition] = ghost;
    return board;
}

function moveLeft(){
    board[pacmanPosition] = ".";
    pacmanPosition --;
    board[pacmanPosition] = "C";
}
function moveRight(){
    board[pacmanPosition] = ".";
    pacmanPosition ++;
    board[pacmanPosition] = "C";
}