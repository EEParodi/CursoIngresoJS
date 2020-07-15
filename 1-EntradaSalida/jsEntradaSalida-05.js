/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;


	alert("Usted se llama " +nombreIngresado " y tiene " +edadIngresada);
}

//ESTA MAL	
//Separar alert en 2




function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;

	alert("Usted se llama " +nombreIngresado);
	alert(" y tiene " +edadIngresada+" años");
}

//concatenar variable Edad con el texto años


*/

function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;

	alert("Usted se llama " +nombreIngresado+" y tiene " +edadIngresada+" años");

//concatenamos todo en el mismo alert para mostrar todo junto
}

/*Copiamos enunciado, comillas doble a la variable,
  reemplazamo la misma por ++, ingresamos variable entre los signos
  
  */

