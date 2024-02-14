let array = [1, 2, 3, 4];
let target = 5;

const sol = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length-1; j >= 0; j--) {
      console.log(j)
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
};

console.log(sol(array, target));