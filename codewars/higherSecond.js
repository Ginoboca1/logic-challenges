const higherSecond = (numbers) => {
  const sorted = [...numbers].sort((a, b) => b - a);
  return sorted[1];
};

console.log(higherSecond([45, 67, 12, 10]));
