import { cards } from './cards.js';
let checkTwoCards = [];

export function addCards(event) {
  console.log("clicked " + event.target.dataset.id);
  checkTwoCards.push(event.target.dataset.id);
  if (checkTwoCards.length <= 2) {
    cards.forEach(function(card) {
      let cardId = Object.keys(card).join();
      if (event.target.dataset.id === cardId) {
        event.target.innerText = card[cardId];
      }
    });
  } else { event.target.innerText = "?"; }
  checkCards();
}

function checkCards() {
  console.log(checkTwoCards);
  if (checkTwoCards.length === 2) {
    if (checkTwoCards[0] === checkTwoCards[1]) {
      alert('You got a match!');
      checkTwoCards = [];
    } else { 
      alert('Not a match'); 
      checkTwoCards = []; 
    }
  }
}