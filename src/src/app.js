// resiviendo datos del programa

var ancho = document.getElementById("ancho");
var alto = document.getElementById("alto");
var mensaje = document.getElementById("mensaje");

//funcion que al ejecutarse modifica los volores del contenedor
function modificar() {
    var contendor = document.getElementById("container");
    contendor.style.width = ancho.value;
    contendor.style.height = alto.value;
    contendor.innerHTML = mensaje.value;
}
// aqui escuchmos el evento clic en el botom y ejecutamos la funcion modificar
const button = document.getElementById("btn-btn").addEventListener("click", modificar);
