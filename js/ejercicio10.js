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

function calcularIMC() {
    var peso = parseFloat(document.querySelector('input[type="number"][placeholder="Peso (kg)"]').value);
    var altura = parseFloat(document.querySelector('input[type="number"][placeholder="Altura (m)"]').value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        var imc = calcularIMCValor(peso, altura);
        var mensaje = obtenerMensajeIMC(imc);
        document.getElementById("resultado").textContent = `Tu IMC es ${imc.toFixed(2)}, ${mensaje}.`;
    } else {
        document.getElementById("resultado").textContent = "Ingresa valores válidos para peso y altura.";
    }
}

function calcularIMCValor(peso, altura) {
    return peso / (altura * altura);
}

function obtenerMensajeIMC(imc) {
    if (imc < 18.5) {
        return "estás en el rango de bajo peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "estás en el rango de peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        return "estás en el rango de sobrepeso.";
    } else {
        return "tienes obesidad.";
    }
}