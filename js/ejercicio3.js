
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
    var inputNumeros = document.querySelector('input[type="text"][placeholder="Ingrese números separados por comas"]').value;

    var numeros = inputNumeros.split(",").map(function(item) {
        return parseFloat(item.trim());
    });

    if (numeros.length === 0 || isNaN(numeros[0])) {
        document.getElementById("resultado").textContent = "Ingrese números válidos.";
        return;
    }

    var media = calcularMedia(numeros);
    var mediana = calcularMediana(numeros);
    var desviacionEstandar = calcularDesviacionEstandar(numeros);

    document.getElementById("resultado").textContent = `Media: ${media.toFixed(2)}, Mediana: ${mediana}, Desviación Estándar: ${desviacionEstandar.toFixed(2)}`;
}

function calcularMedia(numeros) {
    var suma = numeros.reduce(function (total, numero) {
        return total + numero;
    }, 0);
    return suma / numeros.length;
}

function calcularMediana(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) {
        return a - b;
    });
    var mitad = Math.floor(numerosOrdenados.length / 2);
    if (numerosOrdenados.length % 2 === 0) {
        return (numerosOrdenados[mitad - 1] + numerosOrdenados[mitad]) / 2;
    } else {
        return numerosOrdenados[mitad];
    }
}

function calcularDesviacionEstandar(numeros) {
    var media = calcularMedia(numeros);
    var sumaCuadradosDiferencia = numeros.reduce(function (total, numero) {
        return total + Math.pow(numero - media, 2);
    }, 0);
    var varianza = sumaCuadradosDiferencia / numeros.length;
    return Math.sqrt(varianza);
}