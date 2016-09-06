var nombre;
var apellido;
var resultado;

$("#btnLeer").click(leerNombre);

function leerNombre(){
    nombre = $("#txtNombre").val();
    apellido = $("#txtApellido").val();
    resultado = $("#pResultado");
    resultado.html(apellido + ", " + nombre);    
}