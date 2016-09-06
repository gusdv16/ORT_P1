var valor1;
var valor2;
var valor3;
var calcular;
var resultado = $("#pResultado");

$("#btnCalcular").click(calcular);

function calcular(){
    valor1 = Number($("#txtNumero1").val());
    valor2 = Number($("#txtNumero2").val());
    valor3 = Number($("#txtNumero3").val());
    calcular = (valor1*valor1)-(valor2+valor3);
    
    resultado.html("Es: <strong>" + calcular + "</strong>");
}