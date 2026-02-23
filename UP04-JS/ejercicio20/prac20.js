function piramide() {
    texto = "";

    for (let index = 30; index >= 1; index--) {
        texto+="<br>";
        texto+=String(index).repeat(index);
        texto+="</br>";
    }

    document.getElementById("texto").innerHTML = texto;
}