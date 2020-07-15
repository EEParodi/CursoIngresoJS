/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;  //crea la variable

	nombreIngresado=prompt("Ingresa tu nombre", "Natalia Natalia"); //cargo o asigna valor
	

	txtIdNombre.value=nombreIngresado; //mostrar
	

}

//ID lado derecho asigna variable
//ID lado izquierdo muestra variable

/*
ENTRADA
nombreIngresado=prompt("Ingrese su nombre","Natalia Natalia");
nombreIngresado=txtIdNombre.value;

SALIDA
alert("Su nombre es: "+nombreIngresado);
txtIdNombre.value=nombreIngresado
*/

