//-------------Number-----------------//
const score=400

const balance= new Number(100)
console.log(balance);//Number{100}

console.log(balance.toString());//100 is output but type is string
console.log(balance.toFixed(2))//Precision to two digits

const otherNumber=123.8966
console.log(otherNumber.toPrecision(3))//precise upto three values not after decimal compulsarily
//output is 124 upto 3 digits round-off is 124
//return string (toPrecise)method
const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'))//put values according to Indian standards In in en-In

console.log(Number.MIN_VALUE)//minimum possible value of number
console.log(Number.MAX_VALUE)//maximum possible value of number

console.log(Number.MAX_SAFE_INTEGER)


//---------------------Maths----------//
console.log(Math)//it is an object
console.log(Math.PI)//3.141592653589793
console.log(Math.abs(-4))//-ve value to +ve value
console.log(Math.round(3.141592653589793))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.ceil(4.9))
console.log(Math.floor(4.9))

console.log(Math.min(10,20,30,40,50,60))
console.log(Math.max(10,20,30,40,50,60));

console.log(Math.random())//Random value between 0-1
console.log(Math.floor(Math.random()*10 )+1);//*10 for value between 0 and 10 then +1 for 1-10


const min=10
const max=20
//value between min amd max

console.log(Math.floor(Math.random()*(max-min+1))+min)

