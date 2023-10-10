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




function calcularInteresCompuesto() {
    var capitalInicial = parseFloat(document.querySelector('input[type="number"][placeholder="Capital Inicial"]').value);
    var tasaInteresAnual = parseFloat(document.querySelector('input[type="number"][placeholder="Tasa de Interés Anual (%)"]').value);
    var periodoInversion = parseInt(document.querySelector('input[type="number"][placeholder="Período de Inversión en Años"]').value);

    if (!isNaN(capitalInicial) && !isNaN(tasaInteresAnual) && !isNaN(periodoInversion)) {
        var tasaInteresDecimal = tasaInteresAnual / 100;
        var montoFinal = calcularMontoFinal(capitalInicial, tasaInteresDecimal, periodoInversion);
        document.getElementById("resultado").textContent = `El monto final es de $${montoFinal.toFixed(2)}`;
    } else {
        document.getElementById("resultado").textContent = "Ingrese valores válidos.";
    }
}

function calcularMontoFinal(capitalInicial, tasaInteres, periodoInversion) {
    var montoFinal = capitalInicial * Math.pow(1 + tasaInteres, periodoInversion);
    return montoFinal;
}