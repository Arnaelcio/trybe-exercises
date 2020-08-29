let grossSalary = 3000
let irDiscount;
let baseSalary;

if (grossSalary <= 1556.94){
    baseSalary = grossSalary - grossSalary * 8 / 100 ;
} else if (grossSalary <= 2594.92){
    baseSalary = grossSalary - grossSalary * 9 / 100 ;
}else if (grossSalary <= 5189.82){
    baseSalary = grossSalary - grossSalary * 11 / 100 ;
}else {
    baseSalary = grossSalary - 570;
}

if (baseSalary <= 1903.98){
    irDiscount = 0;
}else if (baseSalary <= 2826.65){ 
    irDiscount = baseSalary * 7.5 / 100 - 142.80;
}else if (baseSalary <= 3751.05){
    irDiscount = baseSalary * 15 / 100 - 354.80;
}else if (baseSalary <= 4664.68){
    irDiscount = baseSalary * 22.5 / 100 - 636,13;
}else{
    irDiscount = baseSalary * 27.5 / 100 - 869.36;
}

netSalary = baseSalary - irDiscount;
console.log(netSalary);
