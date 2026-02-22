function modificar() {
    texto = prompt("Introduzca el texto");
    array = texto.split("");
    final = "";
    for (let index = 0; index < array.length; index++) {
        if (array[index] === " ") {
            final+="*";
        } else {
            final+=array[index];
        }
        if (index < array.length-1) {
            final+="*";
        }
    }
    document.getElementById("texto").innerHTML = final;
}