
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function crearNodo(tipoNodo){
    var nodo = document.createElement(tipoNodo);
    return nodo;
}

function adicionarNodoBody(nodo){
    document.body.appendChild(nodo);
}

function crearNodoTexto(tipoNodo, texto) {
    var nodo = crearNodo(tipoNodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;
}

function adivinaNumero() {
    const guess = parseInt(document.getElementById("guess").value);
    intentos++;

    if (guess === numeroAleatorio) {
        document.getElementById("message").textContent = `¡Adivinaste en ${intentos} intentos!`;
    } else if (guess < numeroAleatorio) {
        document.getElementById("message").textContent = "Más alto. Intenta nuevamente.";
    } else {
        document.getElementById("message").textContent = "Más bajo. Intenta nuevamente.";
    }
}