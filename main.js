console.log("Hola Mundo");

const getData = () => {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const fecha = document.querySelector("#date").value;
        console.log(fecha)
    })
}

