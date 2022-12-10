console.log("Hello world");

const monthsDiv = document.getElementById("months");
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");

const updateCountdown = (remainTime) => {
    const months = Math.floor(remainTime / 1000 / 60 / 60 / 24 / 30)
    const days = Math.floor(remainTime / 1000 / 60 / 60 / 24) % 30
    const hours = Math.floor(remainTime / 1000 / 60 / 60) % 24
    const minutes = Math.floor(remainTime / 1000 / 60) % 60
    const seconds = Math.floor(remainTime / 1000) % 60

    monthsDiv.innerHTML = months
    daysDiv.innerHTML = days
    hoursDiv.innerHTML = hours
    minutesDiv.innerHTML = minutes
    secondsDiv.innerHTML = seconds
}

const getDate = () => {
    const date = document.querySelector("#date").value;
    const inputDate = new Date(`${date}T00:00:00`);

    setInterval(() => {
        const actualDate = new Date();
        updateCountdown(inputDate - actualDate)
    }, 1000)

}