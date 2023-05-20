const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard (){
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
    //second click
    secondCard = this;
    
    checkForMatch();
}

function checkForMatch () {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
  
    isMatch? disableCards() : unflipCards();
}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards () {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip')
   resetBoard()
  }, 1500);
}
 
function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle (){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random()*24);
    card.style.order = randomPos;
  });
}) ();
for (let card of cards) {
    card.addEventListener('click', flipCard)
}


function calcScore(){
  let tilesbonus = (24 - tilesleft) * 20; // 20 points for each successful tile= 480 pts
  let timebonus = (45 - time) * 8;  // 8 points for each second = 280 pts
  let triesbonus = (48 - nrTries) * 10;  // (deduct) 10 points for each try = 400 pts
  if (tilesbonus <0) { tilesbonus = 0; }
  if (timebonus <0) { timebonus = 0; }
  if (triesbonus <0) { triesbonus = 0; }
  console.log (tilesbonus + timebonus + triesbonus)}

calcScore();