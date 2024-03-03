let timer;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const display = `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
    document.getElementById('display').innerText = display;
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Initial display update
updateDisplay();
