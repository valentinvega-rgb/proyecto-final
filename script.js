let palanca = document.getElementById("boton_palanca");
let resultado = document.getElementById("resultado");
let resultadoA = document.getElementById("resultadoA");
let resultadoB = document.getElementById("resultadoB");
let resultadoC = document.getElementById("resultadoC");
let divPlataTotal = document.getElementById("platatotal");
let divPuntaje = document.getElementById("puntaje");
let mejora1 = document.getElementById("boton_MejoraPuntos");
let mejora2 = document.getElementById("boton_MejoraProbabilidad");
let puntaje = 0;
let ganancia = 0;
let A;
let B;
let C;
palanca.addEventListener("click", tirarPalanca);
mejora1.addEventListener("click", mejoraDePuntos);
//mejora2.addEventListener("click", mejoraDeProbabilidad);

let listaOpciones = [
    {
        //0
        nombre: "lemon",
        puntos: 1000,
        imagen: "./imagenes/lemon.gif",
        rangoMax:20,
        rangoMin:1
    },
    {
        //1
        nombre: "cereza",
        puntos: 2000,
        imagen: "./imagenes/cherry.png",
        rangoMax:40,
        rangoMin:21
    },
    {   //2
        nombre: "zafiro",
        puntos: 3000,
        imagen: "./imagenes/zafiro.gif",
        rangoMax:53,
        rangoMin:41
    },
    {   //3
        nombre: "trebol",
        puntos: 4000,
        imagen: "./imagenes/trebol.gif",
        rangoMax:65,
        rangoMin:54
    },
    {   //4
        nombre: "banana",
        puntos: 5000,
        imagen: "./imagenes/banana.gif",
        rangoMax:75,
        rangoMin:66
    },
    {   //5
        nombre: "calaca",
        puntos: -10000,
        imagen: "./imagenes/Calaca.gif",
        rangoMax:95,
        rangoMin:91
    },
    {   //6
        nombre: "herradura",
        puntos: 8000,
        imagen: "./imagenes/herradura.jpg",
        rangoMax:85,
        rangoMin:76
    },
    {   //7
        nombre: "pataconejo",
        puntos: 9000,
        imagen: "./imagenes/patadeconejo.gif",
        rangoMax:90,
        rangoMin:86
    },
    {   //8
        nombre: "siete",
        puntos: 10000,
        imagen: "./imagenes/siete.gif",
        rangoMax:100,
        rangoMin:96
    },

]



// Cuando se genera un numero random puedo acceder a la posicion del array correspondiente: listaOpciones[numeroRandom]
function aleatorizador() {
    // Te genera un numero entre el 1 y el 100
    let RNG = Math.floor(Math.random() * 100) + 1;

    for(let i = 0; i <= (listaOpciones.length); i++) {
        console.log(`El numero random es ${RNG}`)
        console.log(`El numero maximo es ${listaOpciones[i].rangoMax}`)
        console.log(`El numero minimo es ${listaOpciones[i].rangoMin}`)
        console.log(`El simbolo que esta siendo revisado es ${listaOpciones[i].nombre}`)

        if (RNG >= listaOpciones[i].rangoMin && RNG <= listaOpciones[i].rangoMax){
            console.log("true") 
            return listaOpciones[i]
        }
    };
    return false
    
}

function tirarPalanca() {
    A = aleatorizador();

    B = aleatorizador();

    C = aleatorizador();

    console.log(A)
    console.log(B)
    console.log(C)

    resultadoA.innerHTML = `<img src=${A.imagen} class="imagenRuleta">`
    resultadoB.innerHTML = `<img src=${B.imagen} class="imagenRuleta">`
    resultadoC.innerHTML = `<img src=${C.imagen} class="imagenRuleta">`

    resultado.innerHTML = `${A.puntos} | ${B.puntos} | ${C.puntos}`

    calcularPuntaje(A, B, C);
}

// EN GANANCIA SE GUARDA LA SUMA DE TODOS LOS PUNTOS

// EN PUNTAJE SE GUARDA EL DE LA TIRADA ACTUAL

function calcularPuntaje(A, B, C) {
    let texto = "";
    puntaje = 0;

    if (A.nombre == "siete" && B.nombre == "siete" && C.nombre == "siete") {
        puntaje = 3000000000;
        ganancia = ganancia + puntaje;
        divPuntaje.innerHTML = `Loteria! Sumaste: ${puntaje}`
        divPlataTotal.innerHTML = `tu total es: ${ganancia}`
    } else {
        puntaje += A.puntos + B.puntos + C.puntos;
        ganancia = ganancia + puntaje;
        divPuntaje.innerHTML = `sumaste: ${puntaje}`
        divPlataTotal.innerHTML = `tu total es: ${ganancia}`

    }

    if (puntaje == 3000000000){
        alert("Ganaste!")
    }
    // De aca para arriba es lo basico, El RNG del 1 al 9
    //document.getElementById("ganancia").innerHTML = texto;
    

}    
//

function mejoraDePuntos() {
    if (ganancia >= 500000){
    listaOpciones[0].puntos = 4000
    listaOpciones[1].puntos = 5000
    listaOpciones[2].puntos = 7000
    listaOpciones[3].puntos = 8000
    listaOpciones[4].puntos = 10000
    listaOpciones[5].puntos = -20000
    listaOpciones[6].puntos = 15000
    listaOpciones[7].puntos = 20000
    listaOpciones[8].puntos = 25000
    }    else{
        alert("Insuficiente dinero")
    }
}

function mejoraDeProbabilidad() {
    if (ganancia >= 10000000){
    listaOpciones[0]
    .rangoMin = 1
    .rangoMax = 16

    listaOpciones[1]
    .rangoMin = 17
    .rangoMax = 32

    listaOpciones[2]
    .rangoMin = 33
    .rangoMax = 42

    listaOpciones[3]
    .rangoMin = 43
    .rangoMax = 52

    listaOpciones[4]
    .rangoMin = 53
    .rangoMax = 62

    listaOpciones[5]
    .rangoMin = 63
    .rangoMax = 74

    listaOpciones[6]
    .rangoMin = 75
    .rangoMax = 82

    listaOpciones[7]
    .rangoMin = 83
    .rangoMax = 90

    listaOpciones[8]
    .rangoMin = 91
    .ragoMax = 100
    
    console.log ("probabilidad mejorada");

    }    else{
        alert("Insuficiente dinero")
    }
}