const pets = ['cat', 'dog', 'bat'];

let isInArray = false;
for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  if (pet === 'dog') {
    isInArray = true;
    break;
  }
}

isInArray; // true

const isInArray2 = pets.includes('cat');

isInArray2; // true
