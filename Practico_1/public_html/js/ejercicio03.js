var numero1;
var numero2;
var numero3;
var resultado;

$("#btnCalcular").click(calcular);

function calcular(){
    numero1 = Number($("#txtNumero1").val());
    numero2 = Number($("#txtNumero2").val());
    numero3 = Number($("#txtNumero3").val());
    resultado = $("#pResultado");
    resultado.html("Resultado: <strong>" + (numero1+numero2+numero3) + "</strong>");
}