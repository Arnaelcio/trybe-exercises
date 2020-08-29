let grade = 91;
let gradeToPercent = grade / 100 * 100;

if(gradeToPercent < 0 || gradeToPercent > 100 ){
    console.log("Erro!! Nota deve ser entre 0 e 100");
}else if(gradeToPercent >= 90){
    console.log("Sua nota é: A");
}else if(gradeToPercent >= 80){
    console.log("Sua nota é: B");
}else if(gradeToPercent >= 70){
    console.log("Sua nota é: C");
}else if(gradeToPercent >= 60){
    console.log("Sua nota é: D");
}else if(gradeToPercent >= 50){
    console.log("Sua nota é: E");
}else{
    console.log("Sua nota é: F");
}

