
function corregir() {
    let puntaje = 0;

    let respuesta1 = document.getElementById("p1").value;
    let respuesta2 = document.getElementById("p2").value;
    let respuesta3 = document.getElementById("p3").value;

    if (respuesta1 === "argentina") {
        puntaje++;
    }

    if (respuesta2 === "11") {
        puntaje++;
    }

    if (respuesta3 === "messi") {
        puntaje++;
    }

    document.getElementById("resultado").innerText =
        "Obtuviste " + puntaje + " de 3 puntos. ⚽";
}
