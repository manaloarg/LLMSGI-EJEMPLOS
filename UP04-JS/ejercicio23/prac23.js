function tabla() {
    numFilas = parseInt(prompt("Introduzca el numero de filas: "));

    numColumnas = parseInt(prompt("Introduzca el numero de columnas: "));

    texto = "<table>";

    contador = 1;

    for (i = 1; i <= numFilas; i++) {
        texto += "<tr>";
        for (j = 1; j <= numColumnas; j++) {
            texto+= "<td>" + contador + "</td>";
            contador++;
        }
        texto +="</tr>"
    }

    texto += "</table>"

    document.getElementById("texto").innerHTML = texto;
}