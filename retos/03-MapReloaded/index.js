/**
  Tienes un array de productos con los siguientes atributos:

  name
  price
  stock
  
  Debes agregar y calcular una nueva propiedad llamada "taxes",
  los impuestos deben ser del 19% con base al precio base.

  Por ejemplo si aplicamos el 19% de impuestos para un producto 
  con precio de $1000 el resultado de los "taxes" será $190, 
  debes tener en cuenta que como resultado se debe dejar un valor 
  entero sin decimales.

  La solución debería tener un input y output como los siguientes:

  solution([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
    ...
  ]);

  Output:
  [
    {
      name: "Product 1",
      price: 1000,
      stock: 10,
      taxes: 190
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20,
      taxes: 380
    },
    ...
  ]
*/

const products = [
  {
    name: 'Producto 01',
    price: 100,
    stock: 11,
  },
  {
    name: 'Producto 02',
    price: 200,
    stock: 22,
  },
  {
    name: 'Producto 03',
    price: 300,
    stock: 33,
  },
  {
    name: 'Producto 04',
    price: 400,
    stock: 44,
  },
];

function addTaxes(array) {
  const tax = 0.19;

  const taxedProducts = array.map((item) => {
    const price = item.price;
    return {
      ...item,
      taxes: Math.trunc(price * tax)
    }
  });

  return taxedProducts;
}

// console.log("Products", products);
console.log("Products Taxed", addTaxes(products));