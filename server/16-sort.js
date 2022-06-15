const months = ["Marzo", "Abril", "Enero", "Diciembre"];
const numbers = [1, 55, 99, 222, 100000, 4];
const words = ["pablo", "Rumania", "raton", "musica"];
const orders = [
  {
    customerName: "Nicolas",
    total: 11,
    delivered: true,
  },
  {
    customerName: "Pablo",
    total: 222,
    delivered: true,
  },
  {
    customerName: "Fio",
    total: 33,
    delivered: false,
  },
  {
    customerName: "Marco",
    total: 444,
    delivered: false,
  },
];

months.sort(); // [ 'Abril', 'Diciembre', 'Enero', 'Marzo' ]

numbers.sort(); // [ 1, 100000, 222, 55, 99 ]

numbers.sort((a, b) => a - b); // [ 1, 4, 55, 99, 222, 100000 ]

words.sort(); //[ 'Rumania', 'musica', 'pablo', 'raton' ]

orders.sort((a,b) => a.total - b.total);
// [
//   { customerName: 'Nicolas', total: 11, delivered: true },
//   { customerName: 'Fio', total: 33, delivered: false },
//   { customerName: 'Pablo', total: 222, delivered: true },
//   { customerName: 'Marco', total: 444, delivered: false }
// ]

