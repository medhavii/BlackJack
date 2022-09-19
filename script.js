let cards = [];
let sum=0;
let message = " ";
let player = {
  name: "Medhavi",
  chips: 200
}

let firstCard = getRndInteger(2,11);
let secondCard = getRndInteger(2,11);
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name+": $"+player.chips

let isalive=false
let hasBlackJack=false

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function startgame()
{
  isalive=true
  let firstCard = getRndInteger(2,11);
  let secondCard = getRndInteger(2,11);
  cards=[firstCard, secondCard]
  sum=firstCard+secondCard;
  renderGame();


}
function renderGame() {
  
  cardsEl.textContent = "Cards: " 
  for(let i =0;i<cards.length;i++)
  {
    cardsEl.textContent+= cards[i]+ " "
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Letsss gooooo! You've got Blackjack!";
    hasBlackJack= true
  } else {
    message = "You are out of the game!";
    isalive=false
  }
  messageEl.textContent = message;
}

function newCard() {
  if(isalive && !hasBlackJack)
  {let thirdCard = getRndInteger(2,11);
  sum += thirdCard;
  cards.push(thirdCard)
  renderGame();
}}
