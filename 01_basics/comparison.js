console.log(2 >1 )//true
console.log(2==1);//false
console.log(2>=1)//true
console.log(2<1);//false
console.log(2!=1);//true

console.log("2">1)//convert to number
console.log("02">1);
//we donot compare two diff datatypes

console.log(null > 0);//false
console.log(null ==0 )//false
console.log(null >=0);//true
//there is a diff type conversion in == and other comparision operators that is a reason why >= true and == false


console.log(undefined ==0)//false
console.log(undefined >0)//false
console.log(undefined <0)//false

//=== strict check compares datatype also

console.log("2"===2)//false