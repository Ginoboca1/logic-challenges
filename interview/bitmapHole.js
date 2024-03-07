const BitmapHoles = (arr) => {
  const dfs = (i, j) => {
    if (i < 0 || i >= arr.length || j < 0 || j >= arr[0].length || arr[i][j] !== "0") {
        return;
    }
    arr[i][j] = "1";
    dfs(i + 1, j); // down
    dfs(i, j + 1); // right
    dfs(i - 1, j); // up
    dfs(i, j - 1); // left
  };

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === "0") {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

const arr = ["10111", "10101", "11101", "11111"];
BitmapHoles(arr);
