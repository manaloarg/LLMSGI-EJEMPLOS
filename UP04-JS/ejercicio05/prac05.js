function concatenar() {
    let concatenado = "";
    do {
        palabra = prompt("Introduzca las palabras()");
        if (palabra != null) {
            concatenado += palabra + " - ";
            console.log(palabra);
            console.log(concatenado);
        }
    } while (palabra != null);

    document.getElementById("texto").innerHTML = concatenado.substring(0,concatenado.length - 3);
}
