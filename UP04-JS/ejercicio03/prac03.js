function mayorEdad() {

  edad = prompt("Introduce la edad --> ");
  console.log(edad);
  if (edad>=18) {
    document.getElementById("texto").innerHTML = "<h1>Eres mayor de edad</h1>"
  } else if(edad<18){
      document.getElementById("texto").innerHTML = "<h1>Eres menor de edad</h1>"
  }
}

/*
function mayorEdad() {

  edad = parseInt(prompt("Introduce la edad --> "));
  console.log(edad);
  if (edad>=18) {
    document.getElementById("texto").innerHTML = "<h1>Eres mayor de edad</h1>"
  } else {
      document.getElementById("texto").innerHTML = "<h1>Eres menor de edad</h1>"
  }
}

function mayorEdad() {
    do {
        edad = parseInt(prompt("Introduce la edad --> "));
    } while (isNaN(edad));

    if (edad>=18) {
        document.getElementById("texto").innerHTML = "<h1>Eres mayor de edad</h1>"
    } else {
        document.getElementById("texto").innerHTML = "<h1>Eres menor de edad</h1>"
    }
}
*/
