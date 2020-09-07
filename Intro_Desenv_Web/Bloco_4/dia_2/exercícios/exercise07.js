let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let smallestNumber = 1000;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}

console.log(smallestNumber);