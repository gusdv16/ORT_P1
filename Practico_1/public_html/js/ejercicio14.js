var chirridos;
var fahrenheit;
var celsius;
var resultado = $("#pResultado");

$("#btnCalcular").click(calcular);

function calcular(){
    chirridos = Number($("#txtChirridos").val());
    
    fahrenheit = 50+((chirridos-40)/4);
    celsius = ((fahrenheit-32)/1.8).toFixed(1);
    
    resultado.html(fahrenheit + " Fahrenheit<br>" + celsius + "°");
}