//Filtrar numeros pares
const nums: number[] = [1, 3, 8, 10, 25, 26, 100, 82];

const filtrarPares = (nums: number[]): number[] => {
  return nums.filter((number) => number % 2 === 0);
};
