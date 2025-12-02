//'use strict';



console.log(' hi from memory game...')


let gameState = [
    {
        image: "images/mariwa1.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa3.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa2.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa6.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa4.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa5.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa1.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa6.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa5.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa4.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa3.jpg",
        isFlipped: false,
    },
    {
        image: "images/mariwa2.jpg",
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

    if (gameState[flippedCards[0]].image === gameState[flippedCards[1]].image) {
        gameState[flippedCards[0]].isFlipped = true;
        gameState[flippedCards[1]].isFlipped = true;
        flippedCards = [];
        checkForWin();
    } else {
        setTimeout(() => {
            document.querySelector(`.card-${flippedCards[0]}`).removeAttribute('src');;
            document.querySelector(`.card-${flippedCards[1]}`).removeAttribute('src');;
            flippedCards = [];
        }, 500)
    }


}

function checkForWin() {
    const allFlipped = gameState.every(card => card.isFlipped === true);
    if (allFlipped) {
        document.getElementById("win-popup").classList.remove("hidden");
    }
}


const onReset = () => {

    gameState.forEach(card => {
        card.isFlipped = false;
    });

    flippedCards = [];

    shuffleCard();

    document.querySelectorAll('.card').forEach(el => {
        el.removeAttribute('src');
    })

}

function closeWinPopup() {
    document.getElementById("win-popup").classList.add("hidden");
    onReset();
}



