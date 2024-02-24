/**
 * count all letters in the string,
 * return result in such format:
 * {
 *  a: 3,
 *  b: 8,
 *  g: 10,
 *  ....,
 * }
 *
 * your solution should be case insensitive,
 * it means that letter "G" is the same as "g" and otherwise - "g" is the same as "G"
 */

// const string = "Some string for TeSting purpose";

const countFunc = (str) => {
  const counter = {};
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in counter) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  }

  return counter;
};

const string = "Some string for TeSting purpose";
console.log(countFunc(string));

/**
 * FACTORIAL
 * make with cycle and recursion
 *
 * factorial(3) -> 3 * 2 * 1 -> 6
 * factorial(4) -> 4 * 3 * 2 * 1 -> 24
 * factorial(5) -> 5 * 4 * 3 * 2 * 1 -> 120
 */
function factorial(n) {
  return n * factorial(n - 1);
}

console.log(factorial(3));
