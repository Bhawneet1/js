let myDate= new Date()
console.log(myDate);
// 2024-09-04T01:00:58.887Z
console.log(myDate.toString());

// Wed Sep 04 2024 01:01:27 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());
// Wed Sep 04 2024

console.log(typeof myDate)
//object

let myCreatedDate= new Date(2024,0,23)
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())
//month 0 sai shurur hotae hai
// Tue Jan 23 2024

let myCreatedDate2=new Date("2024-01-23")//or MM-DD-YYYY
console.log(myCreatedDate2)
//dates are stored in millisec

let myTimeStamp =Date.now()
console.log(myTimeStamp)
//return millisec
console.log(myCreatedDate.getTime())
//similar to millisec
console.log(Math.floor(Date.now()/1000))
//in sec

let newDate=new Date()
console.log(newDate.getDate())
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)
//as start from 0 to clearify

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    
}))
//to modify format