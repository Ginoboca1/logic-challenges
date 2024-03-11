var lengthOfLastWord = function (s) {
  return s.split(" ").pop().length;
};

console.log(lengthOfLastWord("Hello World"));
