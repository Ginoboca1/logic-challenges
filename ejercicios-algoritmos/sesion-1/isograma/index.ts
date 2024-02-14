const isIsogram = (word: string): Boolean => {
  if (!word.length) {
    return false;
  }

  const cleanWord = word
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const letterSet = new Set();

  for (const chart of cleanWord) {
    if (letterSet.has(chart)) {
      return false;
    }
    letterSet.add(chart);
  }
  return true;
};
