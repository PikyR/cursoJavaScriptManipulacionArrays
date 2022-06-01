const numbers = [1, 11, 66, 6, 8, 88, 9, 77, 7];

let isLess = true;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];

  if (element <= 40) {
    isLess = true;
  } else {
    isLess = false;
    break;
  }
}

isLess; // false

const isLess2 = numbers.every(item => item <= 40);
isLess2; // false

// RETO
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const respuesta = team.every(item => {
  return item.age <= 15;
})

console.log(respuesta);