import { cards } from "./cards.js";

export function generateCardGrid() {
  let shuffled = shuffleCards(cards);
  console.log(shuffled);
}

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array
}

