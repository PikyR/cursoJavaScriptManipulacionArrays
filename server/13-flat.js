const matriz = [
  [1, 2, 3],
  ["a", "b", "c", ["aa", "bb", "cc", [11, 22, 33]]],
  [4, 5, 6],
];

let flatFor = [];
for (let i = 0; i < matriz.length; i++) {
  const e = matriz[i];

  for (let j = 0; j < e.length; j++) {
    const el = matriz[i][j];
    flatFor.push(el);
  }
}

flatFor; // [1, 2, 3, "a", "b", "c", 4, 5, 6];

const newArray = matriz.flat(3);
newArray;
// [1, 2, 3, "a", "b", "c", "aa", "bb", "cc", 11, 22, 33, 4, 5, 6];

// RETO

// function FlatR(array) {
//   letresult = []

//   for(let i = 0; i < array.length; i++) {
//       if( !Array.isArray(array[i]) ) {
//           result.push(array[i])
//           continue;
//       }

//       result = result.concat(FlatR(array[i]))
//   }

//   returnresult
// }

function flatter(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];    
    
    if (!Array.isArray(element)) {
      newArray.push(element);
      continue;
    }

    newArray = newArray.concat(flatter(element));
  }

  return newArray;
}

console.log(flatter(matriz));