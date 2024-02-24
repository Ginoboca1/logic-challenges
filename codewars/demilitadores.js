/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

/*
    1. Crear una pila, en donde vamos a guardar los delimitadores
    2. Recorrer el string
    3. Si el char es un delimitador, añadirlo al stack
    4. Si el char es un delimitador de cierre
        - Si la longitud de la pila es 0 o el delimitador que se encuentra es diferente al char actual
        retornar false. Ya que significa que no existe su par de apertura.
*/
const equality = (str) => {
  let stack = [];
  let open = "({[";
  let close = ")}]";

  for (char of str) {
    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      if (stack.length === 0 || open[close.indexOf(char)] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(equality("{}"));
