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
    var boton = document.createElement("button");
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

function crearNodoCheckbox(texto, id) {
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    if (id) checkbox.id = id;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(texto));
    return label;
}

function generarContrasena() {
    var longitud = parseInt(document.querySelector('input[type="number"][placeholder="Longitud de la Contraseña"]').value);
    var incluirMayusculas = document.getElementById("mayusculas").checked;
    var incluirNumeros = document.getElementById("numeros").checked;
    var incluirEspeciales = document.getElementById("especiales").checked;

    if (!isNaN(longitud) && (incluirMayusculas || incluirNumeros || incluirEspeciales)) {
        var caracteresPermitidos = "";
        if (incluirMayusculas) caracteresPermitidos += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (incluirNumeros) caracteresPermitidos += "0123456789";
        if (incluirEspeciales) caracteresPermitidos += "!@#$%^&*()_-+=<>?";
        
        if (caracteresPermitidos === "") {
            alert("Debe seleccionar al menos un tipo de carácter.");
            return;
        }

        var contrasena = "";
        for (var i = 0; i < longitud; i++) {
            var indice = Math.floor(Math.random() * caracteresPermitidos.length);
            contrasena += caracteresPermitidos.charAt(indice);
        }
        document.getElementById("resultado").textContent = contrasena;
    } else {
        document.getElementById("resultado").textContent = "Ingrese valores válidos.";
    }
}