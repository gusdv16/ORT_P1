var valor1;
var valor2;
var resultado = $("#pResultado");

$("#btnCalcular").click(calcular);

function calcular(){
    valor1 = Number($("#txtNumero1").val());
    valor2 = Number($("#txtNumero2").val());
    
    resultado.html("El resto de dividir " + valor1 + " entre " + valor2 + " es: <strong>" + valor1%valor2 + "</strong>");
}