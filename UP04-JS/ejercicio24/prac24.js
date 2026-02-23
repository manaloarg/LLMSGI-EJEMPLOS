function mail() {
    nombre = prompt("Introduzca su nombre: ").toLowerCase().charAt(0);

    apellidos = prompt("Introduzca sus apellidos: ").toLowerCase().replace(" ", "");

    texto = nombre + "." + apellidos + "@prova.es";

    texto = texto.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize();

    document.getElementById("texto").innerHTML = texto;
}