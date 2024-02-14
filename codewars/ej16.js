/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */

const vendingMachine = (coins, item) => {
  let supportedCoins = [5, 10, 50, 100, 200];
  let total = 0;
  for (let coin of coins) {
    if (!supportedCoins.includes(coin)) {
      return "Money unsupported";
    }
  }
  for (let i = 0; i < coins.length; i++) {
    total += coins[i];
  }

  const availableProducts = [
    { slot: 1, name: "Coca-Cola", price: 150 },
    { slot: 2, name: "Oreo", price: 170 },
    { slot: 3, name: "M&M", price: 140 },
    { slot: 4, name: "Doritos", price: 200 },
    { slot: 5, name: "hot-dog", price: 300 },
  ];

  const foundedProduct = availableProducts.filter(
    (product) => product.slot === item
  );

  if (foundedProduct.length === 0) {
    return "Product not founded";
  } else {
    const product = foundedProduct[0];
    if (product.price > total) {
      let missingMoney = product.price - total;
      return `Money insuficient, missin $${missingMoney}`;
    } else if (product.price < total) {
      let rest = total - product.price;
      return `${product.name}, vuelto: $${rest}`;
    } else if (product.price === total) {
      return `${product.name}, vuelto: $0`;
    }
  }
};

let coins = [50, 50, 100, 10, 500];
console.log(vendingMachine(coins, 5));
