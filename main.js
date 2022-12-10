console.log("Hello world");
console.log(new Date);

const getData = () => {
    const date = document.querySelector("#date").value;
    const inputDate = new Date(date);
    const actualDate = new Date();
    updateCountdown(inputDate - actualDate)
}

const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const updateCountdown = (remainTime) => {
    const months = Math.floor(remainTime / 1000 / 60 / 60 / 24 / 30)
    console.log(`Months: ${months}`);
    const days = Math.floor(remainTime / 1000 / 60 / 60 / 24) % 30
    console.log(`Days: ${days}`);
    const hours = Math.floor(remainTime / 1000 / 60 / 60)
    console.log(`Hours: ${hours}`);
    const minutes = Math.floor(remainTime / 1000 / 60) % 60
    console.log(`Minutes: ${minutes}`);
    const seconds = Math.floor(remainTime / 1000) % 60
    console.log(`Seconds: ${seconds}`);
}