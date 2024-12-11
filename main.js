const cards = document.querySelectorAll('.card');
let flippedCards = [];

function flipCard() {
    if (flippedCards.length === 2) return;

    const cardInner = this.querySelector('.card-inner');
    cardInner.classList.add('rotated');  
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.querySelector('.card-front').textContent !== secondCard.querySelector('.card-front').textContent) {
        firstCard.querySelector('.card-inner').classList.remove('rotated');
        secondCard.querySelector('.card-inner').classList.remove('rotated');
    }

    flippedCards = [];
}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});
