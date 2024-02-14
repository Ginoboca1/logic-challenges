const moveZeros = (array: any[]): any[] => {
  let zeros = array.filter((i) => i === 0);
  let finaleArray = array.filter((i) => i !== 0).concat(zeros);
  return finaleArray;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
