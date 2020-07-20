/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
// txtIdPrecioUno txtIdPrecioDos  txtIdPrecioTres

	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos)  

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	alert("La suma total es "+suma);

}

function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var cantProductos;
	var promedio;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos)  

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	cantProductos=3;

	promedio=suma/cantProductos;

	alert("El promedio es "+promedio);

}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var iva;
	var calculoIva;
	var total;

		precioUno=txtIdPrecioUno.value;
		precioUno=parseInt(precioUno);

		precioDos=txtIdPrecioDos.value;
		precioDos=parseInt(precioDos)  

		precioTres=txtIdPrecioTres.value;
		precioTres=parseInt(precioTres);

		suma=precioUno+precioDos+precioTres;

		iva=21/100;

		calculoIva=suma*iva;

		total=suma+calculoIva;

	alert("El precio total mas IVA es $"+total);


}