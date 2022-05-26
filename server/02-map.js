const letters = ['a', 'b', 'c', 'd'];

const newLetters = [];

for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  newLetters.push(element + ')');
}

// Utilizando map()
const newMapLetters = letters.map(item => '(' + item + ')');

console.log('Original: ', letters);
console.log('Nuevo: ', newLetters);
console.log('Con map: ', newMapLetters);
