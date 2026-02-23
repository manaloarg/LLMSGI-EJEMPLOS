function palindromo() {
    texto = prompt("Introduce el texto: ")
    texto = texto.toLowerCase();
    texto = texto.replace(" ", "");
    array = texto.split("");
    array.reverse();
    reverse = "";
    for (let index = 0; index < array.length; index++) {
        reverse += array[index];
    }

    respuesta = "";

    if (texto==reverse) {
        respuesta = "Es palindromo.";
    } else {
        respuesta = "No es palindromo.";
    }

    document.getElementById("texto").innerHTML = respuesta;
}