var lado;
var resultado = $("#pResultado");

$("#btnCalcular").click(calcular);

function calcular(){
    lado = Number($("#txtLado").val());
    
    resultado.html("Suma: <strong>" + (lado*lado) + "</strong>");
}