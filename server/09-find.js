const numbers = [1, 50, 55, 8, 88, 26, 66, 64, 44, 9];

let finded = undefined;
for (let i = 0; i < numbers.length; i++) {
  const n = numbers[i];
  
  if (n === 88) {
    finded = n;
    break;
  }
}

finded; //88

/**
 * el método find retorna la referencia al objeto 
 * lo que lo haría mutable
 */
const newFinded = numbers.find( item => item === 66);
const newFinded2 = numbers.find( item => item === 1000);
newFinded; // 66
newFinded2; // undefined

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const productFinded = products.find(item => {
  return item['id'] === '🍔';  
});

const productId = products.findIndex(product => {
  return product['id'] === '🍔';
})

productFinded; // { name: 'Burger', price: 23, id: '🍔' }
productId; // 1
