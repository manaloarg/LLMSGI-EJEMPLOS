function piramide() {
    texto = "";
    do {
        numero = parseInt(prompt("Introduzca un numero entre 1 y 50: "));
    } while (numero<=0 || numero>50);

    for (let index = 1; index <= numero; index++) {
        texto+="<br>";
        for (let j=1;j<=index;j++){
            texto+=j + " ";
        }
        texto+="</br>";
    }

    document.getElementById("texto").innerHTML = texto;
}