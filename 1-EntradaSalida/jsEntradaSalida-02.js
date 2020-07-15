/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;  //crea la variable

	nombreIngresado=prompt("Ingresa tu nombre", "Natalia Natalia"); //asigna valor
	
	alert("Su nombre es " +nombreIngresado); //muestra el resultado, concatena variable con texto
	//alert(nombreIngresado)
}

// nombreIngresado es ejemplo de fornmato lower camel case
// prompt siempre acompañado de signo = (guarda info en variable)
// nombre de variable lo mas detallado posible
// dividir problemas en la mayor cantidad de partes posibles
// + concatena, en este caso variables

