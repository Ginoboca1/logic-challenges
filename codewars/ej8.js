/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

const isPalindromo = (text) => {
  let plain = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reversed = "";

  for (let i = plain.length - 1; i >= 0; i--) {
    reversed += plain[i];
  }

  return plain === reversed;
};

console.log(isPalindromo("Ana lleva al oso la avellana"));
