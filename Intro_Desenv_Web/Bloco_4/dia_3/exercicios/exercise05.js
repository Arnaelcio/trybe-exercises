let n = 15;
let lineInput = [];
let baseMatrix = [];
let symbol = "*";
let matrix = [];
let left = 1;
let right = n - 2;

for (lineColumn = 0; lineColumn < n; lineColumn += 1) {
    baseMatrix[lineColumn] = symbol;
}

matrix[0] = baseMatrix;

for (lineIndex = 1; lineIndex < n; lineIndex += 1){
    for (lineColumn = 0; lineColumn < n; lineColumn += 1){
        if (lineColumn === left || lineColumn === right){
            lineInput[lineColumn] = symbol;
        }else{
            lineInput[lineColumn] = " ";
        }
    }
    matrix[lineIndex] = lineInput;
    left += 1;
    right -= 1;
    lineInput = [];
    if (left > right) {
        break;
    }
}

let result = "";

for (let lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex -= 1) {
    for (lineColumn = 0; lineColumn < n; lineColumn += 1) {
        result = result + matrix[lineIndex][lineColumn]
    }
    console.log(result)
    result = "";
}