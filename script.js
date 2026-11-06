let palanca = document.getElementById("boton_palanca");
let resultado = document.getElementById("resultado");
let puntaje;
let A;
let B;
let C;
palanca.addEventListener("click", tirarPalanca);

let listaOpciones = [
    {
        nombre: "lemon",
        puntos: 1000,
        imagen: "./imagenes/lemon.png"
    },
    {
        nombre: "cereza",
        puntos: 2000,
        imagen: "./imagenes/cherry.png"
    },
    {
        nombre: "siete",
        puntos: 10000,
        imagen: "./imagenes/siete.png"
    },
]

// Cuando se genera un numero random puedo acceder a la posicion del array correspondiente: listaOpciones[numeroRandom]
function aleatorizador() {
    // Temporalmente va entre 0 y 2 para test
    let RNG = Math.floor(Math.random() * 2);
    return RNG
}

function tirarPalanca() {
    A = listaOpciones[aleatorizador()]

    B = listaOpciones[aleatorizador()]
    C = listaOpciones[aleatorizador()]

    resultado.innerHTML = `${A.puntos} | ${B.puntos} | ${C.puntos}`

    calcularPuntaje(A, B, C);
}

function calcularPuntaje(A, B, C) {
    let texto = "";
    
    if (A == B & B == C) {
        puntaje = puntaje + 1000000
        resultado.innerHTML = `Loteria! tu puntaje es: ${puntaje}`
    } else {
        puntaje = puntaje + A.puntos + B.puntos + C.puntos;
    }

    
    // De aca para arriba es lo basico, El RNG del 1 al 9
    document.getElementById("ganancia").innerHTML = texto;


}

