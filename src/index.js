import './css/styles.css';
import { cards1, cards2 } from './cards.js';

let id = 1

function checkForMatch(id) {
  if (cards1[id] === cards2[id]) {
    console.log("It's a match!")
  }
}

checkForMatch(id)

