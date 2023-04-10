let checkTwoCards = [];

export function addCards(event) {
  console.log("clicked " + event.target.dataset.id);
  checkTwoCards.push(event.target.dataset.id);
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