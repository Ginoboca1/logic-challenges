/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

const isArmstrongNumber = (n) => {
  let result = 0;
  let numStr = n.toString();
  let numLength = numStr.length;
  for (i of numStr) {
    result += parseInt(Math.pow(parseInt(i), numLength));
  }

  return result === n;
};
console.log(isArmstrongNumber(153));
