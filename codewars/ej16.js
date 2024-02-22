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
  const availableCoins = new Set([5, 10, 50, 100, 200]);

  if (!coins.every((coin) => availableCoins.has(coin))) {
    return {
      message: "Invalid coins",
      coins,
    };
  }

  let total = coins.reduce((acc, val) => acc + val, 0);

  const availableProducts = new Map([
    [1, { name: "Coca-Cola", price: 150 }],
    [2, { name: "Oreo", price: 170 }],
    [3, { name: "M&M", price: 140 }],
    [4, { name: "Doritos", price: 200 }],
    [5, { name: "hot-dog", price: 300 }],
  ]);

  if (!availableProducts.has(item)) {
    return {
      message: "Product unavailable",
      coins,
    };
  }
  const { name, price } = availableProducts.get(item);
  if (price > total) {
    return {
      message: "Insufficient cash",
    };
  }
  const rest = total - price;
  return {
    name,
    rest,
  };
};

let coins = [50, 50, 100, 10];
console.log(vendingMachine(coins, 3));
