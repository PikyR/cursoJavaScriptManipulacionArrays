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
 * el mΓ©todo find retorna la referencia al objeto 
 * lo que lo harΓ­a mutable
 */
const newFinded = numbers.find( item => item === 66);
const newFinded2 = numbers.find( item => item === 1000);
newFinded; // 66
newFinded2; // undefined

const products = [
  {
    name: "Pizza",
    price: 12,
    id: 'π'
  },
  {
    name: "Burger",
    price: 23,
    id: 'π'
  },
  {
    name: "Hot dog",
    price: 34,
    id: 'π­'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: 'π₯'
  },
];

const productFinded = products.find(item => {
  return item['id'] === 'π';  
});

const productId = products.findIndex(product => {
  return product['id'] === 'π';
})

productFinded; // { name: 'Burger', price: 23, id: 'π' }
productId; // 1
