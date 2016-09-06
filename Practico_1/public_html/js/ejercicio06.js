var pesos;
var cambio;
var resultado = $("#pResultado");

$("#btnCalcular").click(calcular);

function calcular(){
    pesos = Number($("#txtPesos").val());
    cambio = Number($("#txtCambio").val());
    
    resultado.html(pesos/cambio + " Dólares");
}