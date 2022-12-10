console.log("Hello world");

const getData = () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const date = document.querySelector("#date").value;
        console.log(date);
    })
}

/* const showData = (fecha) => {
    const div = document.getElementById("newDate");
    div.innerHTML = `La fecha seleccionada es: ${fecha}`
} */

const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const actualDate = new Date();
const countdownDate = new Date(2022 - 12 - 31)
const remainTime = actualDate - countdownDate;

console.log(`The actual date is: ${actualDate}`);
console.log(`The countdown date is: ${countdownDate}`)
console.log(`The remaining time is: ${remainTime}`)
