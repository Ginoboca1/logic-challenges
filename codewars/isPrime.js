/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primesNumbers = () => {
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

primesNumbers();
