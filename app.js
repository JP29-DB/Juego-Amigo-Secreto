// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// variable de entrada de nombre
let nombresAmigos;
// variable de campo de texto
let campoAmigo;
// variable de actualización 
let entradaNombres;
// variable de sorteo
let númeroIndiceAleatorio
// variable de nombre de sorteo
let amigoSorteado;
// variable de resultado
let resultado;

function agregarAmigo() {
    nombresAmigos = document.getElementById(`amigo`).value;

    if (nombresAmigos !== "" && nombresAmigos.replace(/\s+/g, '').length > 0) {
        amigos.push(nombresAmigos);
        
        limpiarCaja();
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    entradaNombres = document.getElementById('listaAmigos');
    entradaNombres.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        entradaNombres.innerHTML += "<li>" + amigos[i] + "</li>"; 
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        númeroIndiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[númeroIndiceAleatorio];

        mostrarResultado(amigoSorteado);
    } else {
        alert("Debe agregar al menos un amigo para realizar el sorteo.");
    }
}

function mostrarResultado(amigoSorteado) {
    resultado = document.getElementById('resultado');

    resultado.innerHTML = "¡Tu amigo secreto es: " + amigoSorteado + "!";
}

function limpiarCaja() {
    campoAmigo = document.getElementById('amigo').value = '';
}