/*
  En este desafío tienes un array de números y 
  debes retornar true si dentro de los números 
  de ese array al menos uno es un número par.

  La solución debería tener un input y output 
  como los siguientes:

  input:
  solution([1, 3, 5, 7, 10, 11]);
  solution([1, 3, 5]);

  Output:
  true
  false
*/

function solution(numbers) {
  return numbers.some((n) => {
    return n % 2 === 0;
  })
}

const arreglo = [1, 3, 5];
const arreglo2 = [1, 2, 3, 5];

solution(arreglo); // false
solution(arreglo2); // true