const fn = (str1, str2): boolean => {
  if (!str1.length || !str2.length) {
    return false;
  }

  let str1Normalize = str1
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

  let str2Normalize = str2
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

  if (str1Normalize.length < str2Normalize.length) {
    return false;
  }

  let subcadenaFinal = str1Normalize.slice(str2Normalize.length);
  return subcadenaFinal === str2Normalize;
};
