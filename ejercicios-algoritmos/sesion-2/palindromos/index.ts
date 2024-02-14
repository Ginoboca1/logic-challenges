const isPalindromo = (num: number): boolean => {
  let numOg = num.toString();
  let reverse = num.toString().split("").reverse().join("");
  return numOg === reverse;
};
console.log(isPalindromo(123325));
