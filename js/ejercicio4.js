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


function mostrarTablaMultiplicar() {
    var numero = parseInt(document.querySelector('input[type="number"][placeholder="Seleccione un número"]').value);
    var filas = parseInt(document.querySelector('input[type="number"][placeholder="Filas a mostrar"]').value);

    if (!isNaN(numero) && !isNaN(filas)) {
        var tabla = generarTablaMultiplicar(numero, filas);
        document.getElementById("resultado").textContent = tabla;
    } else {
        document.getElementById("resultado").textContent = "Ingrese números válidos.";
    }
}

function generarTablaMultiplicar(numero, filas) {
    var tabla = `Tabla de multiplicar del ${numero}:\n`;
    for (var i = 1; i <= filas; i++) {
        var resultado = numero * i;
        tabla += `${numero} x ${i} = ${resultado}\n`;
    }
    return tabla;
}