var valor;
var numero=0;
var resultado = $("#pResultado");

$("#btnAgregar").click(sumarValor);
$("#btnCalcular").click(totalValor);

function sumarValor(){
    valor = Number($("#txtValor1").val());
    numero+=valor;
    $("#txtValor1").val("");
}
function totalValor(){    
    resultado.html("Total: <strong>" + numero + "</strong>");
}