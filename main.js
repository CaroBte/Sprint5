console.log("Hola Mundo");

const getData = () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const fecha = document.querySelector("#date").value;
        console.log(fecha);
    })
}

/* const showData = (fecha) => {
    const div = document.getElementById("newDate");
    div.innerHTML = `La fecha seleccionada es: ${fecha}`
} */