function random() {
    texto = ""
    for (let index = 0; index < 15; index++) {
        numero = Math.random();
            if (numero < 0.6) {
                texto += "<br>Resultado " + (index+1) + " : 1 </br>";
            }else if (numero<0.9){
                texto += "<br>Resultado " + (index+1) + " : X </br>";
            }else{
                texto += "<br>Resultado " + (index+1) + " : 2 </br>";
            }
    }
    document.getElementById("texto").innerHTML = texto;
}

/*
function random() {
    texto = ""
    for (let index = 0; index < 14; index++) {
        numero = Math.floor(Math.random() * 10+1);
        if (numero <= 6) {
            texto += "<br>Resultat " + (index+1) + " : 1 </br>";
        }else if (numero <=9) {
            texto += "<br>Resultat " + (index+1) + " : X </br>"
        } else if(numero ==10){
            texto += "<br>Resultat " + (index+1) + " : 2 </br>"
        }
    }
    document.getElementById("texto").innerHTML = texto;
}
*/