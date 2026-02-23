function reverse() {
    texto = prompt("Introduce el texto: ")

    array = texto.split("");

    array.reverse();

    reverse = "";

    for (let index = 0; index < array.length; index++) {
        reverse += array[index];
    }

    document.getElementById("texto").innerHTML = reverse;
}