const sum = (arr) => {
  console.log(arr);
  if (arr.length === 0) {
    return 0;
  }
  const res = arr[0] + sum(arr.slice(1));
  console.log(`Suma parcial: ${res} (arr[${arr[0]}] + sum([${arr.slice(1)}]))`);
  return res;
};

console.log(sum([1, 2, 3, 4, 5]));
