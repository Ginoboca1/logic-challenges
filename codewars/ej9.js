/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

const factorial = (numero) => {
  if (numero === 0) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
};

console.log(factorial(25));
