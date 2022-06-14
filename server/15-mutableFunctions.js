const products = [
  { title: "Piza", price: 11, ID: "🍕" },
  { title: "Burger", price: 22, ID: "🍔" },
  { title: "Peach", price: 33, ID: "🍑" },
];

const myProducts = [];

const productIndex = products.findIndex((item) => item.ID === "🍑");

if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}

products;
// [
//   { title: "Piza", price: 11, ID: "🍕" },
//   { title: "Burger", price: 22, ID: "🍔" },
// ]
myProducts;
// [ { title: 'Peach', price: 33, ID: '🍑' } ]

// Update
const products2 = [
  { title: "Apple", price: 1, ID: "🍎" },
  { title: "Mate", price: 5, ID: "🧉" },
  { title: "Camel", price: 50, ID: "🐫" },
];

const update = {
  ID: "🐫",
  changes: {
    price: 550,
    description: "Camelido",
  },
};

const product2Index = products2.findIndex(item => item.ID === update.ID);

products2[product2Index] = {
  ...products2[product2Index],
  ...update.changes,
}

console.log(products2);
console.log("-".repeat(20));
