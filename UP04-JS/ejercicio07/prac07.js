function letraDni() {
    do {
        dni = parseInt(prompt("Introduce los números de tu DNI"));

        if (dni === null) {
            break; // Sale del ciclo si "Cancelar" es presionado
        }

        if (isNaN(dni)) {
            alert("Valor introducido invalido");
        }else{
            caracteres="TRWAGMYFPDXBNJZSQVHLCKE";
            resto = parseInt(dni)%23;
            dni += caracteres.charAt(resto);
        }

        if (dni != null) {
            alert(dni)
        }
    } while (dni != null);

    document.getElementById("texto").innerHTML = dni;
}