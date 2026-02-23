function ejerArray() {
    numMin = parseInt(prompt("Introduzca el numero minimo: "));

    numMax = parseInt(prompt("Introduzca el numero maximo: "));

    v = [];

    for (let index = 0; index < 5; index++) {
        v.push(Math.floor((Math.random()*((numMax+1)-numMin))+numMin));
    }


    console.table(v);

    for (let index = 1; index <= 3; index++) {
        aux = [];
        num = parseInt(prompt("Introduzca el numero " + index + ": "));
        aux = aux.concat(v.splice(3, v.length-3));
        v.push(num);
        v = v.concat(aux);
    }

    console.table(v);
}