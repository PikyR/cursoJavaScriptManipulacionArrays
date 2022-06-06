/*
  En este desafío vas a recibir el título de 
  un artículo y tú debes transformarlo en 
  un formato de URL en donde normalmente se 
  transforma todo en minúscula y se 
  cambian los espacios por un guion (-), 
  por ejemplo: Curso de arrays => curso-de-arrays

  La solución debería tener un input y output como los siguientes:

  Input:
  solution("La forma de correr Python");
  solution("La API para nunca parar de aprender");
  solution("Curso de arrays");

  Output:
  "la-forma-de-correr-python"
  "la-api-para-nunca-parar-de-aprender"
  "curso-de-arrays"
*/

function solution(title) {
  return title.toLowerCase().split(" ").join("-");
}

solution("La forma de correr Python"); 
// "la-forma-de-correr-python"
solution("La API para nunca parar de aprender"); 
// "la-api-para-nunca-parar-de-aprender"
solution("Curso de arrays"); 
// "curso-de-arrays"
