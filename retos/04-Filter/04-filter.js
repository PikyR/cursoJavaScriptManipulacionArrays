/*
  Tienes un array con palabras, tu desafío es retornar un array 
  solo con las que cumplan con la condición de tener 4 o más letras.

  La solución debería tener un input y output como los siguientes:

  Input:
  solution(['amor', 'sol', 'piedra', 'día']);

  Output:
  [ 'amor', 'piedra' ]
*/

function solution(array) {
  filtered = array.filter(item => item.length >= 4);

  return filtered;
}

console.log(solution(['a', 'b', 'cccc', 'ccccc']));
