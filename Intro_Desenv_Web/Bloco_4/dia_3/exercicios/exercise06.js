let numberCheck = 5;
let divisor;

for (number = 2; number < numberCheck && divisor !== 1; number += 1) {
    divisor = 0; 
    if (numberCheck % number === 0){
        divisor += 1;
    }
}

if (divisor === 0){
    console.log(numberCheck + " é Primo!")
} else {
    console.log(numberCheck + " não é Primo!")

}