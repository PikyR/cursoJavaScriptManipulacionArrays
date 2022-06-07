const elements = [1, 2, 3];
const othersElements = ["a", "b", "c"];

let elementsFor = [...elements];
for (let i = 0; i < othersElements.length; i++) {
  const element = othersElements[i];

  elementsFor.push(element);
}

elementsFor; // [ 1, 2, 3, 'a', 'b', 'c' ]

const elementsConcat = elements.concat(othersElements);
elementsConcat; // [ 1, 2, 3, 'a', 'b', 'c' ]

const elementsSpread = [...elements, ...othersElements];
elementsSpread; // [ 1, 2, 3, 'a', 'b', 'c' ]

const elementsMutable = [11, 22, 33];
elementsMutable.push(...elements);
elementsMutable; // [ 11, 22, 33, 1, 2, 3 ]
