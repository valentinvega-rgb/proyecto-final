let palanca = document.getElementById("boton_palanca");
let resultado = document.getElementById("resultado");
let puntaje;
let A;
let B;
let C;
palanca.addEventListener("click", tirarPalanca);

function aleatorizador() {
    let RNG = Math.floor(Math.random() * 3) + 1;
    return RNG
}

function tirarPalanca() {
    A = aleatorizador()
    B = aleatorizador()
    C = aleatorizador()

    resultado.innerHTML = `${A} | ${B} | ${C}`


    if (A == B & B == C) {
        puntaje = "loteria"
    }

    calcularPuntaje(A,B,c);
}

function calcularPuntaje(A,B,C){
    let texto = "";
for (let i = 1; i <= 3; i++) {
    texto += i + "<br>";
}
document.getElementById("resultado").innerHTML = texto;

}