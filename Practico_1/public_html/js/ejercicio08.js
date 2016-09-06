var valor1;
var valor2;
var valor3;
var resultado = $("#pResultado");

$("#btnCalcular").click(calcular);

function calcular(){
    valor1 = Number($("#txtNumero1").val());
    valor2 = Number($("#txtNumero2").val());
    valor3 = Number($("#txtNumero3").val());
    
    resultado.html("Es: <strong>" + ((valor1+valor2)-valor3) + "</strong>");
}