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
        imagen: "./imagenes/lemon.gif",
        rangoMax:20,
        rangoMin:1
    },
    {
        //2
        nombre: "cereza",
        puntos: 2000,
        imagen: "./imagenes/cherry.png",
        rangoMax:40,
        rangoMin:21
    },
    {   //3
        nombre: "zafiro",
        puntos: 3000,
        imagen: "./imagenes/zafiro.png",
        rangoMax:53,
        rangoMin:41
    },
    {   //4
        nombre: "trebol",
        puntos: 4000,
        imagen: "./imagenes/trebol.png",
        rangoMax:65,
        rangoMin:54
    },
    {   //5
        nombre: "banana",
        puntos: 5000,
        imagen: "./imagenes/banana.png",
        rangoMax:75,
        rangoMin:66
    },
    {   //6
        nombre: "calaca",
        puntos: -10000,
        imagen: "./imagenes/calaca.png",
        rangoMax:95,
        rangoMin:91
    },
    {   //8
        nombre: "herradura",
        puntos: 8000,
        imagen: "./imagenes/herradura.png",
        rangoMax:85,
        rangoMin:76
    },
    {   //9
        nombre: "pataconejo",
        puntos: 9000,
        imagen: "./imagenes/pataconejo.png",
        rangoMax:90,
        rangoMin:86
    },
    {   //7
        nombre: "siete",
        puntos: 10000,
        imagen: "./imagenes/siete.png",
        rangoMax:100,
        rangoMin:96
    },

]

// Cuando se genera un numero random puedo acceder a la posicion del array correspondiente: listaOpciones[numeroRandom]
function aleatorizador() {
    // Te genera un numero entre el 1 y el 100
    let RNG = Math.floor(Math.random() * 99) + 1;

    listaOpciones.forEach((simbolo) => {
        console.log(`El numero random es ${RNG}`)
        console.log(`El numero maximo es ${simbolo.rangoMax}`)
        console.log(`El numero minimo es ${simbolo.rangoMin}`)
        console.log(`El simbolo que esta siendo revisado es ${simbolo}`)
        if (RNG >= simbolo.rangoMin && RNG <= simbolo.rangoMax){
            console.log("true")
            return simbolo
        }
        return false
    });
    
}

function tirarPalanca() {
    A = aleatorizador();

    B = aleatorizador();

    C = aleatorizador();

    console.log(A)
    console.log(B)
    console.log(C)

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