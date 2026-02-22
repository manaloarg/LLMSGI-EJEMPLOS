function cuenta() {
    texto = prompt("Introduzca el texto");
    array = texto.split("");

    document.getElementById("texto").innerHTML = array.length;
}