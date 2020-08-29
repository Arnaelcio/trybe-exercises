
let a = 5;
let b = 9;
let c = 7;

if (a > b && a > c) {
  console.log("entre variável a = " + a + ", " + "a variável b = " + b + ", " + "e a variável c = " + c + ": " + "a = "  + a + " é a maior.");
} else if ((b > a && b > c)) {
    console.log("entre variável a = " + a + ", " + "a variável b = " + b + ", " + "e a variável c = " + c  + ": "  + "b = "  + b + " é a maior.");
}else{
    console.log("entre variável a = " + a + ", " + "a variável b = " + b + ", " + "e a variável c = " + c  + ": "  + "c = "  + c + " é a maior.");
}