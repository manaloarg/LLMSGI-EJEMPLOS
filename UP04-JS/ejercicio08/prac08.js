function mayor() {
    nombreMayor = "";
    edadMayor = 0;

    for (let index = 0; index < 3; index++) {
        nombre = prompt("Introduzca el nombre de la persona "+(index+1));
        edad = parseInt(prompt("Introduzca la edad de la persona "+(index+1)));

        if (edad>edadMayor) {
            nombreMayor = nombre;
            edadMayor = edad;
        }
    }

    document.getElementById("texto").innerHTML = nombreMayor + " " + edadMayor;
}

/*
function mayor() {
    nombreMayor = "";
    edadMayor = 0;

    for (let index = 0; index < 3; index++) {
        nombre = prompt("Introduzca el nombre de la persona "+(index+1));
        do{
            edad = parseInt(prompt("Introduzca la edad de la persona "+(index+1)));
        }while(isNaN(edad))

        if (edad>edadMayor) {
            nombreMayor = nombre;
            edadMayor = edad;
        }
    }

    document.getElementById("texto").innerHTML = nombreMayor + " " + edadMayor;
}
    */