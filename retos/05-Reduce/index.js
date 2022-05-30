/*
  Tienes un array de números y debes retornar 
  la suma de todos los valores en él.

  La solución debería tener un input y output 
  como los siguientes:
  Input:
  solution([1, 1, 1]);
  solution([2, 4, 8]);

  Output
  3
  14
*/

function solution(numbers) {
	const total = numbers.reduce((acc, number) => {
		return acc + number
	}, 0);

	return total;
};


solution([20, 40, 80]); // 140
