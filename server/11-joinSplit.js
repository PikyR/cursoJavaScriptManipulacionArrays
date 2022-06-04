const elements = ["Fuego", "Aire", "Tierra", "Agua"];

let respuesta = "";
for (let i = 0; i < elements.length; i++) {
  const element = elements[i]; 

  respuesta += element + " | ";
}

respuesta; // Fuego | Aire | Tierra | Agua | 

// JOIN
const respuesta2 = elements.join(' | ');
respuesta2; // Fuego | Aire | Tierra | Agua

// SPLIT
const texto = 'Ejemplo de split con JS';
const respuesta3 = texto.split(' ');
respuesta3; // [ 'Ejemplo', 'de', 'split', 'con', 'JS' ]

const textoParaURL = texto.toLowerCase().split(' ').join('-');

textoParaURL; // ejemplo-de-split-con-js
