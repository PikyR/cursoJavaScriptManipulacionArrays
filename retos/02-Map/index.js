/*
	En este desafío tienes un array de números, 
	usando la función map debes retornar 
	todos los números del array multiplicados por dos.

	La solución debería tener un input y output como los siguientes:

	Input
	solution([2, 4, 5, 6]);

	Output
	[4,8,10,12]
*/

function solution(array) {
	return array.map(item => item * 2);
}

resultado = solution([1, 11, 111, 1111]);
console.log(resultado); //[ 2, 22, 222, 2222 ]
