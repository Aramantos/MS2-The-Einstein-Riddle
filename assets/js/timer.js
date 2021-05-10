// CREDIT Code: https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;

function print(txt) {
    document.getElementById("timer-clock").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    $(".answers").prop("disabled", true).val("")
}

// Timer Start 

$(document).ready(function () {
    $("#start-button").click(function () {
        start();
    });
});

// // Riddle Completetion Time Calculator

const result = document.querySelector("#timer-final");

let firstDateGrab;

$("#start-button").click(function () {
    firstDateGrab = new Date();
});

function timeGrab() {
    let secondDateGrab = new Date();

    const ms = (secondDateGrab.getTime()) - (firstDateGrab.getTime());
    const minute = 1000 * 60;

    result.innerText = "Completion Time: " + parseInt(ms / minute) + " minutes";
}