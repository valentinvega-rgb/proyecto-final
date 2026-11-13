let palanca = document.getElementById("boton_palanca");
let resultado = document.getElementById("resultado");
let divPlataTotal = document.getElementById("platatotal");
let divPuntaje = document.getElementById("puntaje");
let puntaje = 0;
let ganancia = 0;
let A;
let B;
let C;
palanca.addEventListener("click", tirarPalanca);

let listaOpciones = [
    {
        //1
        nombre: "lemon",
        puntos: 1000,
        imagen: "./imagenes/lemon.png"
    },
    {
        //2
        nombre: "cereza",
        puntos: 2000,
        imagen: "./imagenes/cherry.png"
    },
    {   //3
        nombre: "zafiro",
        puntos: 3000,
        imagen: "./imagenes/zafiro.png"
    },
    {   //4
        nombre: "trebol",
        puntos: 4000,
        imagen: "./imagenes/trebol.png"
    },
    {   //5
        nombre: "banana",
        puntos: 5000,
        imagen: "./imagenes/banana.png"
    },
    {   //6
        nombre: "calaca",
        puntos: -4500,
        imagen: "./imagenes/calaca.png"
    },
    {   //10
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

// EN GANANCIA SE GUARDA LA SUMA DE TODOS LOS PUNTOS

// EN PUNTAJE SE GUARDA EL DE LA TIRADA ACTUAL

function calcularPuntaje(A, B, C) {
    let texto = "";
    puntaje = 0;

    if (A == B & B == C) {
        puntaje = 1000000;
        ganancia = ganancia + puntaje;
        divPuntaje.innerHTML = `Loteria! Sumaste: ${puntaje}`
        divPlataTotal.innerHTML = `tu total es: ${ganancia}`
    } else {
        puntaje += A.puntos + B.puntos + C.puntos;
        ganancia = ganancia + puntaje;
        divPuntaje.innerHTML = `sumaste: ${puntaje}`
        divPlataTotal.innerHTML = `tu total es: ${ganancia}`

    }

    
    // De aca para arriba es lo basico, El RNG del 1 al 9
    //document.getElementById("ganancia").innerHTML = texto;
    

}    
//