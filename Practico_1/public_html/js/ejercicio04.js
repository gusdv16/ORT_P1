var numero1;
var numero2;
var suma = $("#pSuma");
var multiplicacion = $("#pMultiplicacion");

$("#btnCalcular").click(calcular);

function calcular(){
    numero1 = Number($("#txtNumero1").val());
    numero2 = Number($("#txtNumero2").val());
    numero3 = Number($("#txtNumero3").val());
    
    suma.html("Suma: <strong>" + (numero1+numero2) + "</strong>");
    multiplicacion.html("Multiplicación: <strong>" + (numero1*numero2) + "</strong>");
}