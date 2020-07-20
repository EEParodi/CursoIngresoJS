/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

{
	//txtIdSueldo

	var sueldo;
	var aumento;
	var resultado;
	var porcentaje,


	sueldo=txtIdSueldo.value;
	sueldo=parseInt(sueldo);

	porcentaje=10;

	aumento=(sueldo*porcentaje)/100;

	resultado=sueldo+aumento;

	txtIdResultado.value=resultado;

}
