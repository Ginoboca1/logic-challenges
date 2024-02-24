/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

const sets = (arr1, arr2, boolean) => {
  const set = [];
  if (boolean) {
    for (i of arr1) {
      if (arr2.includes(i)) {
        set.push(i);
      }
    }
    return set;
  } else {
    for (i of arr1) {
      if (!arr2.includes(i)) {
        set.push(i);
      }
    }
    for (i of arr2) {
      if (!arr1.includes(i)) {
        set.push(i);
      }
    }
    return set;
  }
};

console.log(
  sets(["banana", "manzana", "pera"], ["naranja", "pera", "pomelo"], false)
);
