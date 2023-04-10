import './css/styles.css';
import { generateCardGrid } from './gameboard.js';
import { addCards } from './play.js';

generateCardGrid();
document.querySelector('#gameboard').addEventListener("click", addCards);

