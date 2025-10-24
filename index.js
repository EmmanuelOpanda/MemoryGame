//'use strict';



console.log(' hi from memory game...')


let gameState = [
    {
        image: "images/cat.jpg",
        isFlipped: false,
    },
    {
        image: "images/fish.jpg",
        isFlipped: false,
    },
    {
        image: "images/dog.jpg",
        isFlipped: false,
    },
    {
        image: "images/fish.jpg",
        isFlipped: false,
    },
    {
        image: "images/dog.jpg",
        isFlipped: false,
    },
    {
        image: "images/cat.jpg",
        isFlipped: false,
    },

]

let flippedCards = []

shuffleCard();


function shuffleCard() {
    gameState.sort(() => Math.random() - 0.5)

    console.log(gameState)
}

function onCardClick(idx) {
    if (flippedCards.length === 2) return;
    if (gameState[idx].isFlipped) return;

    document.querySelector(`.card-${idx}`).src = gameState[idx].image
    flippedCards.push(idx);

    if (flippedCards.length === 1) return;

    // this excecuted only if 2 cards flipeed
    if (gameState[flippedCards[0]].image === gameState[flippedCards[1]].image) {
        gameState[flippedCards[0]].isFlipped = true;
        gameState[flippedCards[1]].isFlipped = true;
        flippedCards = [];
    } else {
        setTimeout(() => {
            document.querySelector(`.card-${flippedCards[0]}`).removeAttribute('src');;
            document.querySelector(`.card-${flippedCards[1]}`).removeAttribute('src');;
            flippedCards = [];
        }, 2000)
    }


}
































/*
let isGameOver = false;

let player = 1;


 let board = [
   null, null, null,
    null, null, null,
    null, null, null
]; 

let isWinner = false;

const myModal = document.querySelector('dialog')

const checkWin = () => {
    if (
        board[0] === board[1] && board[1] === board[2] && board[0] !== null ||
        board[3] === board[4] && board[4] === board[5] && board[3] !== null ||
        board[6] === board[7] && board[7] === board[8] && board[6] !== null ||

        board[0] === board[3] && board[3] === board[6] && board[0] !== null ||
        board[1] === board[4] && board[4] === board[7] && board[1] !== null ||
        board[2] === board[5] && board[5] === board[8] && board[2] !== null ||

        board[0] === board[4] && board[4] === board[8] && board[0] !== null ||
        board[2] === board[4] && board[4] === board[6] && board[2] !== null
    ) {
        return true
    };
    return false;
}

const onCellClick = (idx) => {
    if (board[idx] !== null) return;
    if (isGameOver) return;

    if (player === 1) board[idx] = 'X'
    else {
        board[idx] = 'O';

    }

    document.querySelector(`.c${idx}`).innerHTML = board[idx];

    if (checkWin()) {
        isGameOver = true;
        document.querySelectorAll('.square').forEach(element => {
            console.log(element)
            element.classList.add('animate__animated', 'animate__rotateIn');
        });
        document.querySelector('.winner').innerHTML = player;

        myModal.show()
    }

    if (player === 1) player = 2;
    else player = 1;

    document.querySelector(".player-ph").innerHTML = player;

}

*/