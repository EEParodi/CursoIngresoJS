/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//txtIdTemperatura
	var tempFahr;
	var calculoCelsius;

	tempFahr=txtIdTemperatura.value;
	tempFahr=parseInt(tempFahr);

	calculoCelsius=(tempFahr-32)/1.8;

	alert(tempFahr+" Fahrenheit son "+calculoCelsius+" centigrados");

}

function CentigradosFahrenheit () 
{
	var tempCelsius;
	var calculoFahr;

	tempCelsius=txtIdTemperatura.value;
	tempCelsius=parseInt(tempCelsius);

	calculoFahr=(tempCelsius*1.8)+32,

	alert(tempCelsius+" centígrados son "+calculoFahr+" Fahrenheit" )
}
