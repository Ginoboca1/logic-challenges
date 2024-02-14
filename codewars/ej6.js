/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const wordsCounter = (word) => {
  const words = word
    .toLowerCase()
    .replace()
    .replace(/[.,?!]/g, "")
    .split(" ");
  const wordsCount = {};

  for (word of words) {
    if (word in wordsCount) {
      wordsCount[word]++;
    } else {
      wordsCount[word] = 1;
    }
  }

  for(let word in wordsCount){
    console.log(`${word}: ${wordsCount[word]}`)
  }
};


wordsCounter(
  "Hola, mi nombre es Gino. Mi nombre completo es Gino Boca (gnoboc)."
);
