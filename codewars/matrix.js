// Supongamos que 'matrix' es la matriz 2D que quieres recorrer.

// Este bucle 'for' externo itera sobre cada fila de la matriz.
// for (let i = 0; i < matrix.length; i++) {
//   // 'row' contiene la fila actual de la matriz.
//   let row = matrix[i];

//   // Este bucle 'for' interno itera sobre cada elemento de la fila actual.
//   for (let k = 0; k < row.length; k++) {
//     // 'column' contiene el elemento actual de la fila actual.
//     let column = row[k];
//     // Aquí puedes hacer algo con 'column', como imprimir su valor.
//     console.log(column);
//   }
// }

/* Dada una matriz 2D de números enteros, escribe una función en JavaScript que encuentre el valor máximo 
en la matriz y devuelva su posición (fila y columna). */

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const maxValue = (matrix) => {
  let maximo = matrix[0][0];
  let rowMax = 0;
  let columnMax = 0;

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let k = 0; k < row.length; k++) {
      let element = row[k];
      if (element > maximo) {
        maximo = element;
        rowMax = i;
        columnMax = k;
      }
    }
  }
  
  return {
    maximo,
    rowMax,
    columnMax,
  };
};

console.log(maxValue(matrix));
