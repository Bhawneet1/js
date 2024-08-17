let score=33//type=number
console.log(typeof (score))

let s="33abc"//type=string
console.log(typeof(s))

let valueInNumber=Number(s)
console.log(typeof(valueInNumber))
console.log(valueInNumber)//NAN hai(not a number)

let s1=null
let valueInNumber1=Number(s1)
console.log(typeof(valueInNumber1))
console.log(valueInNumber1)//0

let s2=undefined
let valueInNumber2=Number(s2)
console.log(typeof(valueInNumber2))
console.log(valueInNumber2)//NAN hai(not a number)

let s3=true
let valueInNumber3=Number(s3)
console.log(typeof(valueInNumber3))
console.log(valueInNumber3)//1 if true 0 if false

let isloggedIn=1
let booleanIsLoggedIn= Boolean(isloggedIn)
console.log(booleanIsLoggedIn)

let str=""//empty string flase
let booleanfn=Boolean(str)
console.log(booleanfn)

let str2=" "//str with something is true even the space
let booleanfn2=Boolean(str2)
console.log(booleanfn2)

let someNumber=33
let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber);
