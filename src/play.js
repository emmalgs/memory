import { cards } from './cards.js';
let checkTwoCards = [];

export function addCards(event) {
  console.log("clicked " + event.target.dataset.id);
  checkTwoCards.push(event.target.dataset.id);
  checkTwoCards.forEach(function(element) {
    cards.forEach(function(card) {
      let cardId = Object.keys(card).join();
      if (element === cardId) {
        event.target.innerText = card[cardId];
      }
    });
  });
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