// resiviendo datos del programa

var ancho = document.getElementById("ancho");
var alto = document.getElementById("alto");
var mensaje = document.getElementById("mensaje");


function modificar() {
    var contendor = document.getElementById("container");
    contendor.style.width = ancho.value;
    contendor.style.height = alto.value;
    contendor.innerHTML = mensaje.value;

}

const button = document.getElementById("btn-btn").addEventListener("click", modificar);