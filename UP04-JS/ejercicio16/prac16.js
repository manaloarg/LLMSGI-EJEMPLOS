function parentesi() {
    texto = prompt("Introduce el texto: ")

    primerParentesi = texto.indexOf("(")
    ultimoParentesi = texto.indexOf(")")

    resultado = "";

    if (primerParentesi == -1) {
        resultado = "El texto no continen paréntesis";
    }else if (primerParentesi != -1 && ultimoParentesi == -1) {
        resultado = texto.substring(primerParentesi+1, texto.lenght);
    } else if (primerParentesi != -1 && ultimoParentesi != -1) {
        resultado = texto.substring(primerParentesi+1, ultimoParentesi);
    }
    document.getElementById("texto").innerHTML = resultado;
}