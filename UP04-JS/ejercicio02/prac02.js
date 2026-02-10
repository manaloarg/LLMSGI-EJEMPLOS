function intro(){
    document.write("<h3 id=titulo>Hola, aquí empezamos con Javascript</h3>");
}

function alerta() {
    window.alert("Benvingut a la segona pràctica");
}

function modifica() {
  document.getElementById("titulo").innerHTML = "Soy Manuel Alonso y estoy modificando este mensaje";
}

function consola() {
  console.log("Manuel Alonso");
  console.log(new Date());
}