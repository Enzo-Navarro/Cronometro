let hours = 00;
let minutes = 00;
let seconds = 00;

let interval;

function start() {
    interval = setInterval(counting, 1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);

    hours = 00;
    minutes = 00;
    seconds = 00;

    document.getElementById('counter').innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
}

function counting() {
    seconds ++;

    if (seconds === 60) {
        seconds = 00;
        minutes ++;

        if (minutes === 60) {
            minutes = 00;
            hours ++;
        }
    }

    document.getElementById('counter').innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
}

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit);
    } else {
        return (digit);
    }
}