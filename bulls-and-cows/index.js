function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const getRandomNumbers = ( num, minNum, maxNum) => {
    /* num - represent the number of digits for the random numbers
       minNum - the minimum range of the number
       maxNum - the maximum range of the number
    */
    if (num > (maxNum - minNum)+1 ) {
        return undefined;
    }

    const numbers = [];
    const numbersRange = [];

    for (let i=minNum; i<=maxNum; i++) {
        numbersRange.push(i);
    }
    for (let i=0; i<num; i++) {
        const randNum = getRandomInt(numbersRange.length);
        numbers.push(numbersRange[randNum]);
        console.log(numbersRange);
        numbersRange.splice(randNum, 1);
    }  
    
    return numbers;
}

const checkBullsAndCows = ( secretNumber, guessedNumber ) => {
    let cows = 0;
    let bulls = 0;
    
    for (let i=0;i<guessedNumber.length;i++) {
        if (Number(guessedNumber[i]) === secretNumber[i]) {
            bulls++;
        } else {
            for (let i1=0;i1<secretNumber.length;i1++) {
                if (Number(guessedNumber[i]) === secretNumber[i1]) {
                    cows++;
                }
            }
        }
    }
    return { "cows" : cows,
             "bulls" : bulls };
}
const secretNumber = getRandomNumbers(4, 0, 9
    )
console.log(secretNumber);

const buttonElement = document.querySelector(".button");
const answerElement = document.querySelector(".answer");
buttonElement.addEventListener("click", ()=> {
    const answer = answerElement.value; 
    const result = checkBullsAndCows(secretNumber,answer);
    if (result.bulls == 4) {
        alert("You won !");
    } else {
        alert(JSON.stringify(result));
    }
})
