export default function encontrarImpar(numeros: number[]): number {
  let repeat = {};
  for (let num of numeros) {
    if (repeat[num]) {
      repeat[num]++;
    } else {
      repeat[num] = 1;
    }
  }

  for (let key in repeat) {
    if (repeat[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
  return 0;
}
