console.log("Hello")
console.warn("This is warning")
console.error("This is Error")
var a='10'
console.log(a)
var s=10
var d=0.5
var e=true
console.table([s,d,e]);
var f=20
var g=10
console.log(f-g)
console.log(f+g)
console.log(f*g)
console.log(f/g)
console.log(f%g)
alert("hello")
var ans=confirm("Are you an Adult")
console.log(ans)
// ok then true cancel then false in confirm
var h=prompt("Enter your nme")
// input mangega
console.log(h)
console.log('username is',h)
console.log(`The name is ${h}`)

// JS DataTypes

// -Primitive


// -Number(1,2,3,4,0.5,20.6666)
// -String('b','Bhawneet')
// -Boolean(true,false)
// -undefined
// -null
// -Symbol
// -NaN (eg we multiply or divide or sub in b/w different datatypes)


//-Reference

// -Array []
// -Object {}
// -Function ()

var i='Bhawneet'
var j=10
console.log(i+j)//concatinate
console.log(i-j)//NaN as between diff datatypes


//conditional
if(10>50)
{
    console.log("correct")
}else{
    console.log("Incorrect")
}

//loop
var a=0
while(a<5)
{
    console.log(a)
    a++
}


var b=10
while(b>0)
{
    console.log(b)
    b--
}

for(var i=0;i<10;i++)
{
    console.log(i)
}


//comparision

var m=10
var n='10'
if(m===n)//== just compare value therefore 10=='10' but if === also compare datatype
{
    console.log("Sahi hai")
}else{
    console.log("Galat hai")
}

//function
function hey(){
    console.log('Good Morning')
}
hey()

function sing(){
    console.log("MAin hooon Giaaaan")
}
sing()

function dance(){
    console.log("🕺🕺🕺🕺🕺🕺🕺")
}
dance()

function greet(a){
    console.log("Good Morning",a)
}
greet("Bhawneet")

function abc()
{
    console.log("Hello")
    return 20
}
var a=abc()
console.log(a)

//First Class Function
var abc= function()
{
    console.log("Hello")
}
abc()

//Arrow funnction
var abc =()=>{
    console.log("abc")
}
abc()


//var ,let,const
var groom="Selmon"
var bride="Kat"

groom="Vicky"//change ho gya

console.log(groom,"Weds",bride)

const o="Selmon"
const p="Kat"

// g="Vicky"//Error

console.log(o,"Weds",p)


var a=[10,20,30,40,50]
console.log(a)

//Higher order function- function mai function pass karo
a.forEach(function(elem){
    console.log("Hello",elem)
})
var arr=[10,"Hello",40.0,20,true]//non-homogeneous possible
console.log(arr)

console.log(arr[0])
arr.push(99)
console.log(arr)
arr.pop()
console.log(arr)
console.log(arr.length)

//object
var obj={
    user:'Bhawneet',
    age:20,

}
console.log(obj)
console.log(obj.user)
console.log(obj.age)

var obj1={
    model:"Apple",
    price:70000,
    color:"White"
}

var obj2={
    model:"OnePlus",
    price:30000,
    color:"Black"
}

var obj3={
    model:"SamSung",
    price:45000,
    color:"Grey"

}

console.log(obj1.color)

var user={
    username:"Bhawneet",
    age:20,
    greet:function(){
        console.log("Good Morning")
        //return to prevent undefined
        return 10
    }
}
console.log(user)

console.log(user.username)
console.log(user.age)
console.log(user.greet())
// console.log(user.greet())//undefined after Good Morning because nothing returns

//array of objects
var arr1=[
    {user:"Bhawneet",age:20},
    {user:"Harsh",age:30},
    {user:"Akash",age:25}
]
console.log(arr1)
console.log(arr1[0].user)


