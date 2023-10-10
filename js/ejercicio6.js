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


var libros = [];

function agregarLibro() {
    var titulo = prompt("Ingrese el título del libro:");
    var autor = prompt("Ingrese el autor del libro:");
    var anoPublicacion = prompt("Ingrese el año de publicación del libro:");

    if (titulo && autor && anoPublicacion) {
        var libro = {
            titulo: titulo,
            autor: autor,
            anoPublicacion: anoPublicacion
        };
        libros.push(libro);
        alert("Libro agregado con éxito.");
    } else {
        alert("Todos los campos deben estar completos.");
    }
}

function buscarPorTitulo() {
    var tituloBuscado = prompt("Ingrese el título del libro a buscar:");

    if (tituloBuscado) {
        var resultados = libros.filter(function (libro) {
            return libro.titulo.toLowerCase() === tituloBuscado.toLowerCase();
        });

        mostrarResultados(resultados);
    } else {
        alert("Ingrese un título válido.");
    }
}

function buscarPorAutor() {
    var autorBuscado = prompt("Ingrese el autor del libro a buscar:");

    if (autorBuscado) {
        var resultados = libros.filter(function (libro) {
            return libro.autor.toLowerCase() === autorBuscado.toLowerCase();
        });

        mostrarResultados(resultados);
    } else {
        alert("Ingrese un autor válido.");
    }
}

function mostrarResultados(resultados) {
    var mensaje = "";
    if (resultados.length === 0) {
        mensaje = "No se encontraron resultados.";
    } else {
        mensaje = "Resultados encontrados:\n";
        for (var i = 0; i < resultados.length; i++) {
            mensaje += `Título: ${resultados[i].titulo}, Autor: ${resultados[i].autor}, Año de Publicación: ${resultados[i].anoPublicacion}\n`;
        }
    }
    document.getElementById("resultado").textContent = mensaje;
}