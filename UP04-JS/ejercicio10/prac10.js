function random() {
    numero1 = Math.floor(Math.random() * 99 + 1);

    do {
        numero2 = Math.floor(Math.random() * 99 + 1);
    } while (numero1 == numero2);

    do {
        numero3 = Math.floor(Math.random() * 99 + 1);
    } while (numero1 == numero3 || numero2 == numero3);

    document.getElementById("num1").innerHTML = numero1;
    document.getElementById("num2").innerHTML = numero2;
    document.getElementById("num3").innerHTML = numero3;

}