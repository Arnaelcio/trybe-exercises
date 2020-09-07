let n = 5;
let symbol = "*";
let lineInput = "";
let middle = (n + 1) / 2;
let left = middle;
let right= middle;

for (i = 0; i <= middle; i += 1) {
  for (j = 1; j <= n; j += 1) {
    if (j > right && j < left) {
      lineInput += symbol;
    } else {
      lineInput += " ";
    }
  }
  console.log(lineInput);
  lineInput = "";
  right -= 1;
  left += 1;
}