/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

function sumar()
{
	//txtIdNumeroUno  txtIdNumeroDos

	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value; 
	numeroDos=txtIdNumeroDos.value;
//Al ser ingresados por el uuario, retorna los numeros como palabras
	resultado=numeroUno+numeroDos
	alert(resultado)

}


Doble comilla indica PALABRA
signo + concatena palabras
*/

function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno); //transforma variable ingresado en numero entero

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	alert(resultado);
}


