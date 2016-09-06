var valor1;
var calcular;
var resultado = $("#pResultado");

$("#btnCalcular").click(calcular);

function calcular(){
    valor1 = Number($("#txtNumero1").val());
    calcular = valor1+(valor1*1.22);
    
    resultado.html("Total a pagar: <strong>" + calcular + "</strong>");
}