/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const fn = (string) => {
  let result = string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return result;
};

console.log(fn("hola loco"));
