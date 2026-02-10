function sumar() {
    suma=0;
    do {
        numero = parseInt(prompt("Introduce un número"));
        if (isNaN(numero)) {
            alert("Valor introducido invalido");
        }else{
            suma += numero;
            console.log(numero);
            console.log(suma);
        }
    } while (numero != null);

    document.getElementById("texto").innerHTML = suma;
}


/*
function sumar() {
    let suma = 0;
    let numero;

    do {
        numero = prompt("Introduce un número");

        // Si el usuario pulsa "Cancelar", `numero` será null
        if (numero === null) {
            break; // Sale del ciclo si "Cancelar" es presionado
        }

        numero = parseInt(numero);

        if (isNaN(numero)) {
            alert("Valor introducido inválido");
        } else {
            suma += numero;
            console.log(numero);
            console.log(suma);
        }
    } while (true);

    document.getElementById("texto").innerHTML = "La suma total es: " + suma;
}

*/