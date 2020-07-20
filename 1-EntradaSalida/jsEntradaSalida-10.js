/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/*function mostrarAumento()

{
	//txtIdImporte

	var importeIngresado;
	var descuento;
	var resultado;
	var porcentaje;

	importeIngresado=txtIdImporte.value;
	importeIngresado=parseInt(importeIngresado);

	porcentaje=25

	descuento=(importeIngresado*porcentaje)/100;

	resultado=importeIngresado-descuento;

	txtIdResultado.value=resultado;

}

*/

/*function mostrarAumento()

{
	var importe;
	var descuento;
	var calculoPorcentaje;
	var resultado;

	importe=prompt("Importe a calcular", "Importe");
	importe=parseInt(importe);

	descuento=prompt("Ingrese descuento", "Descuento");
	descuento=parseInt(descuento);

	calculoPorcentaje=(importe*descuento)/100;

	resultado=importe-calculoPorcentaje;

	alert("El resultado es "+resultado)

}
*/

function mostrarAumento()

{
	var importe;
	var porcentajeDescuento;
	var calculoPorcentaje;
	var totalDescuento;
	var resultado;

	importe=prompt("Importe a calcular", "Importe");
	importe=parseInt(importe);

	descuento=prompt("Ingrese descuento", "Descuento");
	descuento=parseInt(descuento);

	calculoPorcentaje=descuento/100;

	totalDescuento=importe*calculoPorcentaje;

	resultado=importe-totalDescuento;

	alert("El importe es $"+importe+", el descuento es $"+totalDescuento+" y el precio final es $"+resultado)
}