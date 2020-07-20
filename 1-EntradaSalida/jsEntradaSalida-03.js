/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
function mostrar()
{
	var nombreIngresado; //variable definida
	nombreIngresado=txtIdNombre.value; //guarda variable para mostrarla despues
	alert("Su nombre es "+nombreIngresado);

}
*/

//Buscaren html (ctrl+d) pegar en linea de guardar var
// si olvido value, error imputhtmlelement


function mostrar()
{
	var nombreIngresado;  //crea la variable
	var apellidoIngresado;

	nombreIngresado=prompt("Ingresa tu nombre", "Juan"); //asigna valor
	apellidoIngresado=prompt("Ingresa tu apellido", "Perez");

	alert("Su apellido es "+apellidoIngresado+" y "+nombreIngresado+" de nombre");

	 //muestra el resultado, concatena variable con texto
}