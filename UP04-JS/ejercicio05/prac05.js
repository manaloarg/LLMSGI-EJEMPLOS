function notaExamen() {
    nota = parseInt(prompt("Introduzca la nota:"));
    console.log(nota);

    switch (nota) {
        case 0:
        case 1:
        case 2:
            document.getElementById("texto").innerHTML = "<p>0-3: Muy deficiente</p>";
            break;
        case 3:
        case 4:
            document.getElementById("texto").innerHTML = "3-5: Insuficiente";
            break;
        case 5:
            document.getElementById("texto").innerHTML = "5-6: Suficiente";
            break;
        case 6:
            document.getElementById("texto").innerHTML = "6-7: Bien";
            break;
        case 7:
        case 8:
            document.getElementById("texto").innerHTML = "7-9: Notable";
            break;
        case 9:
        case 10:
            document.getElementById("texto").innerHTML = "9-10: Excelente";
            break;
        default:
            document.getElementById("texto").innerHTML = "No es un número o la nota es mayor de 10";
            break;
    }
}

/*
function notaExamen() {
    do {
        nota = parseInt(prompt("Introduzca la nota:"))
    } while (nota<0 || nota>10 || isNaN(nota));
    console.log(nota);

    switch (nota) {
        case 0:
        case 1:
        case 2:
            document.getElementById("texto").innerHTML = "<p>0-3: Muy deficiente</p>";
            break;
        case 3:
        case 4:
            document.getElementById("texto").innerHTML = "3-5: Insuficiente";
            break;
        case 5:
            document.getElementById("texto").innerHTML = "5-6: Suficiente";
            break;
        case 6:
            document.getElementById("texto").innerHTML = "6-7: Bien";
            break;
        case 7:
        case 8:
            document.getElementById("texto").innerHTML = "7-9: Notable";
            break;
        case 9:
        case 10:
            document.getElementById("texto").innerHTML = "9-10: Excelente";
            break;
        default:
            document.getElementById("texto").innerHTML = "No es un número o la nota es mayor de 10";
            break;
    }
}
*/