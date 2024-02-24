/*
 * Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

const areOrthogonal = (vector1, vector2) => {
  if (vector1.length !== vector2.length) {
    return false;
  }

  let arrayDot;
  for (let i = 0; i < vector1.length; i++) {
    arrayDot += vector1[i]*vector2[i];
  }
};

const vector1 = [1, -2];
const vector2 = [2, 1];

console.log(areOrthogonal(vector1, vector2));
