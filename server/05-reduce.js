const numbers = [10, 20, 30, 40];

let sumaTotal = 0; 

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  
  sumaTotal = sumaTotal + element;
}

sumaTotal; // 100

// Utilizando reduce()

const newTotal = numbers.reduce((acc, element) => acc + element, 0);

console.log(newTotal);