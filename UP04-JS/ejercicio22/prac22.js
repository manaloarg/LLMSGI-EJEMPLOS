function multiplo() {
    texto = "";

    for (let index = 1; index <= 500; index++) {
        texto+="<br>";
        texto+=String(index);
        if(index%4==0){
            texto+=" (Múltiplo de 4)";
        }
        if(index%9==0){
            texto+=" (Múltiplo de 9)";
        }
        texto+="</br>";
        if (index%5==0) {
            texto+="<hr>";
        }
    }

    document.getElementById("texto").innerHTML = texto;
}