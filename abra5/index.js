/*
- Check if the number is smaller or larger then the input.
- Show the number of retries.
- Handle new game when guessed right.
- Calculated score by number of max-retries - retries.
- randomize MIN / MAX numbers.
- add colors to a win/lose result.
*/


const MAX_GUESS_NUMBER = Math.floor(Math.random() * 1) + 100;
const MIN_GUESS_NUMBER = Math.floor(Math.random() * 100) + 1;
const MAX_RETRIES = 10;

const randomNumber = (min, max) => {
      return (Math.floor(Math.random() * max) + min);
}

let guessNumber;
let retires = 0;

const restartGame = () => {
    guessNumber = randomNumber(MIN_GUESS_NUMBER, MAX_GUESS_NUMBER);
    resultElement.textContent = '';
    guessedNumberElement.value = '';
    newGameElement.classList.add('hidden');
    newGameElement.classList.remove('visable');
    retires = 0;
    let retriesElement = document.querySelector('#retries');
    retriesElement.textContent = '0';
}

let descriptionElement = document.querySelector('#description');
descriptionElement.textContent = `Try to guess a number between ${MIN_GUESS_NUMBER} to ${MAX_GUESS_NUMBER}:`;

let guessedNumberElement = document.querySelector('#guessed_number');
let guessButtonElement = document.querySelector('#guess_button');
let resultElement = document.querySelector('#result');
let retriesElement = document.querySelector('#retries');
let newGameElement = document.querySelector('#new_game');
document.querySelector('#max_retries').textContent = String(MAX_RETRIES);
guessButtonElement.addEventListener('click', () => {
    console.log(guessedNumberElement.value);
    const guessedNumber = Number(guessedNumberElement.value);
    
    if (guessedNumber === guessNumber) {
        const score = MAX_RETRIES - retires;
        resultElement.textContent =`You guessed right ! You score is ${score}`;
        resultElement.style.color = "Green";
        newGameElement.classList.add('visable');
        newGameElement.classList.remove('hidden');
        
    } else {
        retires++;
        if (retires === MAX_RETRIES) {
            resultElement.textContent ="Your lost :(";
            resultElement.style.color = "Red";
            newGameElement.classList.add('visable');
            newGameElement.classList.remove('hidden');
            return;
        }
        retriesElement.textContent = String(retires);
        if (guessedNumber > guessNumber) {
            resultElement.textContent ="Your guess is higher then the number.";
            resultElement.style.color = "Red";
        } else {
            resultElement.textContent ="Your guess is lower then the number.";
            resultElement.style.color = "Red";
        }
    }
});

newGameElement.addEventListener('click', () => {
    restartGame();
});

restartGame();
console.log(guessNumber);
