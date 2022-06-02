/*
  En este desafío tienes un array de números 
  y debes retornar true si dentro de los 
  números de ese array todos los números son pares.

  La solución debería tener un input y output 
  como los siguientes:

  Input:
  solution([2, 4, 6, 8, 10]);
  solution([1, 3, 5, 7, 10, 11]);
  solution([1, 3, 5]);

  Output:
  true
  false
  false
*/

function solution(numbers) {
	return numbers.every(n => {
		return n % 2 === 0;
	});
};

solution([2, 4, 6, 8, 10]); // true
solution([1, 3, 5, 7, 10, 11]); // false
solution([1, 3, 5]); // false