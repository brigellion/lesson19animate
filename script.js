
const car = document.querySelector('.car');
const startBtn = document.getElementById('start-button');
const resetBtn = document.getElementById('stop-button');

let pos = 0;
let start = false;
let id;

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let inc = getRandom(1, 10);

const myAnimation = function () {
    id = requestAnimationFrame(myAnimation);
    pos += inc;
    if (pos < 1900) {
        car.style.left = pos + 'px';
    } else {
        pos = 0;
        car.style.left = pos + 'px';
    }
};


startBtn.addEventListener('click', () => {
    if (start) {
        cancelAnimationFrame(id);
        startBtn.textContent = 'START';
    } else {
        id = requestAnimationFrame(myAnimation);
        startBtn.textContent = 'STOP';
    }
    start = !start;
});

resetBtn.addEventListener('click', () => {
    cancelAnimationFrame(id);
    start = false;
    startBtn.textContent = 'START';
    pos = 0;
    inc = getRandom(1, 10);
    car.style.left = pos + 'px';
});