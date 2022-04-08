const timerElement = document.querySelector('.timer');
const buttonElement = document.querySelector('.start-button');
const timerCount = document.querySelector('.timer-count');
let intervalId = undefined;
let counter = 0;
let startTime = undefined;
let currentTimer = undefined;
buttonElement.addEventListener('click', () => {
    startTime = new Date().getTime();
    currentTimer = timerElement.value;

    intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        const timePassed = (currentTime - startTime) / 1000;
        timerCount.textContent = String(Math.trunc(timePassed));
        alert('t');
    }, 100);
    setTimeout(
        ()=> {
            clearInterval(intervalId);
            alert("timer expired !")
        }, 
        timerElement.value * 1000);
})

