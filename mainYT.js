

// Variables DOM de los botones con los que se juega (piedra, papel y tijera)
let botonpiedra = document.querySelector("#piedra")
let botonpapel = document.querySelector("#papel")
let botontijera = document.querySelector("#tijera")
let score = document.querySelector("#score");
let jugadorLog = document.querySelector("#jugadorLog")
let maquinaLog = document.querySelector("#maquinaLog")
let resultadoLog = document.querySelector("#resultadoLog")



// Eventos click para los botones con los que se juega
botonpiedra.onclick = function() {opcion(0)};
botonpapel.onclick = function () {opcion(1)};
botontijera.onclick = function() {opcion(2)}

// Variable de puntos
let puntos = 0;

// Funcion que ejecuta el juego en base a la opcion elegida en los botones
function opcion(miOpcion){
    
    // Se declara un array con los posibles resultados y las opciones a jugar
    const resultadoTexto = ["empate","victoria","derrota"];
    const resultadoEmoji = ["&#9994;", "&#9995;", "&#9996;"]
    const opciones = ["piedra","papel","tijera"];
    
    /* Se declara una matriz de datos que contiene los valores 0, 1, 2 pertenecientes
    a las opciones piedra =0, papel =1, tijera =2 y los resultados empate =0, victoria =1, derrota=2*/
    const jugadasPosibles = [
                            [0,1,2],
                            [2,0,1],
                            [1,2,0]
    ];

    // Se calcula un numero random que será la elección de la máquina
    const numeroRandom = Math.round(Math.random() * 2);
    // Se compara en la matriz de datos segun la eleccion de la maquina (random) y del jugador (botones)
    const resultado = jugadasPosibles [numeroRandom][miOpcion];

    // Se imprime en el DOM la eleccion del jugador y de la maquina, luego el resultado.
    jugadorLog.innerHTML = `Elegiste: ${opciones[miOpcion]} ${resultadoEmoji[miOpcion]} `
    maquinaLog.innerHTML = `Eligió: ${opciones[numeroRandom]} ${resultadoEmoji[numeroRandom]} `
    resultadoLog.innerHTML = `${resultadoTexto[resultado]}`
    
    // Se comprueba el resultado y se asigna puntos
    resultadoTexto[resultado] === "victoria" ? puntos +=3 : resultadoTexto[resultado] === "empate" ? puntos++ : puntos--;
    // Se inserta en el DOM los puntos
    score.innerHTML = `Puntos: &#11088; ${puntos}`
}

