/*
    
*/

function ordenarArray(array) {
  for (let i = 2; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let higher = array[j];
        array[j] = array[j + 1];
        array[j + 1] = higher;
      }
    }
  }
  return array;
}

let miArray = [3, 5, 8, 1, 2];
console.log(ordenarArray(miArray));
