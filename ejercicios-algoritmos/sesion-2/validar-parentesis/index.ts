const validate = (str: string): boolean => {
  let stack: string[] = [];
  if (str.length < 2) {
    return false;
  }

  for (const char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")" && stack.length === 0) {
      return false;
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
};
