import getPuzzle from './requests'
import Hangman from './hangman'
const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", e => {
  if(e.charCode === 13){
    startGame();
  } else{
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
  }
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game1.statusMessage;
  game1.puzzle.split("").forEach(letter => {
    let letterEl;
    if (letter !== " ") {
      letterEl = document.createElement("span");
    }else{
      letterEl = document.createElement("i");
    }
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);
startGame();

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })
