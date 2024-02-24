const moveZeros = (array: any[]) => {
  return array.filter((i) => i !== 0).concat(array.filter((i) => i === 0));
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
