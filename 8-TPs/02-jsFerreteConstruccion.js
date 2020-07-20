/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
//txtIdLargo  txtIdAncho  txtIdRadio
	var largoTerreno;
	var anchoTerreno;
	var calculoTerreno;
	var hilosAlambre;
	var cantidadAlambre;

	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);

	hilosAlambre=3;

	calculoTerreno=(largoTerreno+anchoTerreno)*2;

	cantidadAlambre=calculoTerreno*hilosAlambre;

	alert("Se necesitan "+cantidadAlambre+" metros de alambre");

}

function Circulo () 
{
	var radio;
	var pi;
	var calculoTerreno;
	var hilosAlambre;
	var cantidadAlambre;

	radio=txtIdRadio.value;
	radio=parseInt(radio);

	pi=3.14;

	hilosAlambre=3;

	calculoTerreno=2*pi*radio;
	
	cantidadAlambre=calculoTerreno*hilosAlambre;

	alert("Se necesitan "+cantidadAlambre+" metros de alambre");

}

function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var calculoTerreno;
	var bolsasCemento;
	var bolsasCal;
	var totalCemento;
	var totalCal;

	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);

	calculoTerreno=largoTerreno*anchoTerreno;

	bolsasCemento=2;

	bolsasCal=3;

	totalCemento=calculoTerreno*bolsasCemento;

	totalCal=calculoTerreno*bolsasCal;

	alert("Para "+calculoTerreno+" m2 de terreno, se necesitan "+totalCemento+" bolsas de cemento y "+totalCal+" bolsas de cal");
}

