const orders = [
  {
    costumerName: 'Nico',
    total: 22,
    delivered: true,
  },
  {
    costumerName: 'Loco',
    total: 33,
    delivered: true,
  },
  {
    costumerName: 'Pepe',
    total: 44,
    delivered: false,
  },
  {
    costumerName: 'Rena',
    total: 88,
    delivered: false,
  },
  {
    costumerName: 'Trico',
    total: 333,
    delivered: true,
  },
  {
    costumerName: 'Merito',
    total: 1,
    delivered: false,
  },
  {
    costumerName: 'Zooo',
    total: 99,
    delivered: true,
  },
];

const totales = orders.map((item) => item.total);

const taxedOrders = orders.map((item) => {
  return {
    ...item, // con el 'spread operator' (...) se copian las keys y valores del obj original
    tax: 0.21
  };
});

console.log('Original: ', orders);
console.log('Totales: ', totales);
console.log('Totales con IVA: ', taxedOrders);
