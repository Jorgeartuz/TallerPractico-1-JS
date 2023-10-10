var estudiantes = {};

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

function mostrarFormularioAgregar() {
    var nombre = prompt("Ingrese el nombre del estudiante:");
    var edad = prompt("Ingrese la edad del estudiante:");
    var identificacion = prompt("Ingrese el número de identificación del estudiante:");

    if (nombre && edad && identificacion) {
        estudiantes[identificacion] = { nombre: nombre, edad: edad };
        alert("Estudiante agregado con éxito.");
    } else {
        alert("Todos los campos deben estar completos.");
    }
}

function mostrarFormularioBuscar() {
    var buscarIdentificacion = prompt("Ingrese el número de identificación a buscar:");

    if (buscarIdentificacion) {
        var estudiante = estudiantes[buscarIdentificacion];
        if (estudiante) {
            document.getElementById("resultado").textContent = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Número de Identificación: ${buscarIdentificacion}`;
        } else {
            document.getElementById("resultado").textContent = "Estudiante no encontrado.";
        }
    } else {
        alert("Ingrese un número de identificación válido.");
    }
}
