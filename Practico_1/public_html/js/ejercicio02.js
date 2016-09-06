var numero1;
var numero2;
var resultado;

$("#btnCalcular").click(calcular);

function calcular(){
    numero1 = Number($("#txtNumero1").val());
    numero2 = Number($("#txtNumero2").val());
    resultado = $("#pResultado");
    resultado.html("Resultado: " + (numero1+numero2));
}