function random() {
    texto = ""
    for (let index = 0; index < 14; index++) {
        numero = Math.floor(Math.random() * 3+1);
        if (numero == 3) {
            texto += "<br>Resultado " + (index+1) + " : X </br>";
        }else{
            texto += "<br>Resultado " + (index+1) + " : " + numero + " </br>";
        }
    }
    document.getElementById("texto").innerHTML = texto;
}

/*
function mostrarQuiniela() {
    const opciones = ["1", "X", "2"];
    let quiniela = [];

    for (let i = 0; i < 15; i++) {
        quiniela.push(opciones[Math.floor(Math.random() * 3)]);
    }

    document.getElementById("resultado").innerText =
        quiniela.join(" - ");
}*/