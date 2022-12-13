import { postInputDate, getInputDate } from "./api.js"

console.log("Hello world");

const monthsDiv = document.getElementById("months");
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");
const btn = document.getElementById("btn")
let interval

const updateCountdown = (remainTime) => {
    const months = Math.floor(remainTime / 1000 / 60 / 60 / 24 / 30)
    const days = Math.floor(remainTime / 1000 / 60 / 60 / 24) % 30
    const hours = Math.floor(remainTime / 1000 / 60 / 60) % 24
    const minutes = Math.floor(remainTime / 1000 / 60) % 60
    const seconds = Math.floor(remainTime / 1000) % 60

    monthsDiv.innerHTML = months < 10 ? `0${months}` : months;
    daysDiv.innerHTML = days < 10 ? `0${days}` : days;
    hoursDiv.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesDiv.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsDiv.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

const postDate = () => {
    clearInterval(interval) //Stops interval
    const inputDate = document.querySelector("#date").value;
    postInputDate(inputDate);

    /*     console.log(inputDate); */
    /*     const date = new Date(`${inputDate}T00:00:00`); */

    /*     interval = setInterval(() => {
        const actualDate = new Date();
        updateCountdown(date - actualDate)
    }, 1000) */
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    postDate();
})

getInputDate();
