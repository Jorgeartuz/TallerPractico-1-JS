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

function crearNodoBoton(texto, onClick) {
    var boton = crearNodo("button");
    boton.textContent = texto;
    boton.onclick = onClick;
    return boton;
}

function crearNodoInput(type, placeholder) {
    var input = crearNodo("input");
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

function calcularEstadisticas() {
    var inputCalificaciones = document.querySelector('input[type="text"][placeholder="Lista de Calificaciones (separadas por comas)"]').value;

    var calificaciones = inputCalificaciones.split(',').map(function (calificacion) {
        return parseFloat(calificacion.trim());
    });

    if (calificaciones.every(function (calificacion) {
        return !isNaN(calificacion);
    })) {
        var promedio = calcularPromedio(calificaciones);
        var calificacionMaxima = Math.max(...calificaciones);
        var calificacionMinima = Math.min(...calificaciones);

        var resultadoTexto = `Promedio: ${promedio.toFixed(1)}\nCalificación más alta: ${calificacionMaxima}\nCalificación más baja: ${calificacionMinima}`;
        document.getElementById("resultado").textContent = resultadoTexto;
    } else {
        document.getElementById("resultado").textContent = "Ingrese calificaciones válidas (separadas por comas).";
    }
}

function calcularPromedio(calificaciones) {
    var suma = calificaciones.reduce(function (acumulador, calificacion) {
        return acumulador + calificacion;
    }, 0);
    return suma / calificaciones.length;
}