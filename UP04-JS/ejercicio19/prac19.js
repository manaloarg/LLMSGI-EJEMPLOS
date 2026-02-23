function piramide() {
    texto = "";

    for (let index = 1; index <= 30; index++) {
        texto+="<br>";
        texto+=String(index).repeat(index);
        texto+="</br>";
    }

    document.getElementById("texto").innerHTML = texto;
}