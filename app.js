// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto = 0;
let nombreAmigos = [];

function agregarAmigo() {
    let entradaNombre = document.getElementById(`amigo`);
    let nombreAmigo = input.value.trim();
    
    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        input.value = "";

        actualizarListaAmigos();
}
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        mostrarResultado(amigoSorteado);
    } else {
        alert("Agrega al menos un nombre de amigo para el sorteo.");
    }
}

function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    let mensaje = document.createElement('li');
    mensaje.textContent = `¡Tu amigo secreto es: ${amigoSorteado}!`;
    resultado.appendChild(mensaje);
}