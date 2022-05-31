const array = [1, 1, 1, 2, 3, 99, 99];

const histogram = array.reduce((acc, item) => {
  if (acc[item]) {
    acc[item] = acc[item] + 1;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});

histogram;
/*
{ 
  '1': 3,
  '2': 1, 
  '3': 1,
  '99': 2 
}
*/

const data = [
  {
    name: "Player 01",
    level: "easy",
  },
  {
    name: "Player 02",
    level: "medium",
  },
  {
    name: "Player 03",
    level: "hard",
  },
  {
    name: "Player 04",
    level: "legend",
  },
  {
    name: "Player 05",
    level: "medium",
  },
  {
    name: "Player 06",
    level: "medium",
  },
  {
    name: "Player 07",
    level: "hard",
  },
  {
    name: "Player 08",
    level: "hard",
  },
];

const rta = data
  .map(item => item.level)
  .reduce((acc, item) => {
    if (acc[item]) {
      acc[item] = acc[item] + 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {})
;

rta;
// { easy: 1,
//   medium: 3,
//   hard: 3,
//   legend: 1
// }

// RETO
// output
// {
//  1-5: n,
//  6-8: n,
//  9-10: n,
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce((acc, numb) => {
  // console.log(acc);
  if (numb >= 1 && numb <= 5) {
    acc['1-5'] += 1;
  } else if (numb >= 6 && numb <= 8){
    acc['6-8'] += 1;
  } else {
    acc['9-10'] += 1;
  }

  return acc;
},{
  '1-5': 0,
  '6-8': 0,
  '9-10': 0,
});

result;
// { 
//   '1-5': 5,
//   '6-8': 3,
//   '9-10': 2
// }

