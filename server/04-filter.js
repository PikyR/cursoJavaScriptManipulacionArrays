const words = [
  'coso',
  'manzana',
  'roberto',
  'azul'
];

const newGroup = [];
for (let i = 0; i < words.length; i++) {
  const item = words[i];
  if (item.length >= 6) {
    newGroup.push(item);
  }
}

// Utilizando el metodo filter()
const otherGroup = words.filter(item => item.length <= 6);

newGroup; // [ 'manzana', 'roberto' ]
otherGroup; // [ 'coso', 'azul' ]
words; // [ 'coso', 'manzana', 'roberto', 'azul' ]

//////////////////

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
    costumerName: 'Pepe',
    total: 4444,
    delivered: true,
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

const deliveredOrders = orders.filter(item => item.delivered && item.total >= 50);
deliveredOrders; // [ { costumerName: 'Trico', total: 333, delivered: true }, { costumerName: 'Zooo', total: 99, delivered: true }]

const search = (query) => {
  return orders.filter((item) => {
    return item.costumerName.includes(query);
  })
}

search('pe');
// output
// [
//   { costumerName: 'Pepe', total: 44, delivered: false },
//   { costumerName: 'Pepe', total: 4444, delivered: true }
// ]