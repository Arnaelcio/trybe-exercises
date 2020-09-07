function romans (letters){ 
  
  let  listOfromans = {
   I: 1,    
   IV : 4,    
   V : 5,    
   IX : 9,    
   X : 10,   
   XL : 40,   
   L : 50,   
   XC : 90,   
   C : 100,  
   CD : 400,  
   D : 500,  
   CM : 900,  
   M : 1000 
  };

let arrayWithNumbers = [];
  let result = 0;

  for (let find in letters) {
    arrayWithNumbers[find] = listOfromans[letters[find]];
  }

  for (let index in arrayWithNumbers) {
    index = Number(index)
    if (arrayWithNumbers[index] < arrayWithNumbers[index + 1]) {
      result -= arrayWithNumbers[index]
    } else {
      result += arrayWithNumbers[index];
    }
  }

  return result;
}
console.log (romans('MCMLV'))
