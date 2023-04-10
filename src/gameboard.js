import { cards } from "./cards.js";

export function generateCardGrid() {
  const board = document.querySelector("#gameboard");
  let shuffled = shuffleCards(cards);
  for (let i = 0; i < shuffled.length; i++) {
    let id = Object.keys(shuffled[i]).join();
    const div = document.createElement("div");
    div.setAttribute("data-id", id);
    div.innerText = "?";
    board.append(div);
  }
}

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array;
}

