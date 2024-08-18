//Primitive
//call by value
//7 types :String,Number,Boolean,null,undefined,Symbol,BigInt
//JavaScript is Dynamic in nature
const score=100;
const scoreValue=100.3

const isloggedIn = false
const outsideTemp=null

let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id== anotherId)//false return value always different

const bigNumber=7593475935734957n
//Reference type/Non primitive
//Array,Objects,Functions

const heros =["shaktiman" ,"naagraj" ,"doga"]
//array
console.log(heros)
let myobj={
    name:"Bhawneet",
    age: 20,
}//object
console.log(myobj)

const myFunction =function(){
    console.log("Hello World")
}//function
console.log(typeof(myFunction))
//all non primitive have return datatypes is object