function crearNodo(tipoNodo) {
    return document.createElement(tipoNodo);
}

function crearNodoTexto(tipoNodo, contenido) {
    var nodo = crearNodo(tipoNodo);
    nodo.textContent = contenido;
    return nodo;
}

function adicionarNodoBody(nodo) {
    document.body.appendChild(nodo);
}

var preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuesta: "París"
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        respuesta: "Gabriel García Márquez"
    }
];

function iniciarJuego() {
    var puntuacion = 0;
    for (var i = 0; i < preguntas.length; i++) {
        var respuestaUsuario = prompt(preguntas[i].pregunta);
        if (respuestaUsuario && respuestaUsuario.toLowerCase() === preguntas[i].respuesta.toLowerCase()) {
            puntuacion++;
        }
    }
    mostrarPuntuacion(puntuacion, preguntas.length);
}

function mostrarPuntuacion(correctas, total) {
    var mensaje = `Puntuación: ${correctas} de ${total} respuestas correctas`;
    document.getElementById("resultado").textContent = mensaje;
}

window.onload = iniciarJuego;

