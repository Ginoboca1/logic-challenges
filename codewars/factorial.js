/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

const factorialRecursivo = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const factorialBucle = (n) => {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * i;
  }
  return res;
};

console.log(factorialBucle(25));
