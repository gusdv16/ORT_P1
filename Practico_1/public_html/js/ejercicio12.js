var peso;
var altura;
var resultado = $("#pResultado");

$("#btnCalcular").click(calcular);

function calcular(){
    peso = Number($("#txtPeso").val());
    altura = Number($("#txtAltura").val());
    imc = peso/(altura*altura);
    
    resultado.html("El índice de masa corporal es: <strong>" + imc.toFixed(2) + "</strong>");
}