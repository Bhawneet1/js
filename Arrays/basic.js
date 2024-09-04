let myArray = [0,1,2,3,4,5]
console.log(myArray)
console.log(myArray[0])

let newArray=[0,3,4,'a',3.4]
console.log(newArray)

//array perform shallow copy not deep copy
//means it points to same location


const myArray2 =new Array(1,2,3,4)
console.log(myArray2)


console.log(myArray)
//[ 0, 1, 2, 3, 4, 5 ]
myArray.push(6);
console.log(myArray)
// [0, 1, 2, 3,4, 5, 6 ]
//push at end
myArray.pop()
console.log(myArray)
//[ 0, 1, 2, 3, 4, 5 ]
//pop from end
myArray.unshift(0)
console.log(myArray)
//[0, 0, 1, 2, 3, 4, 5]
//add to begining
myArray.shift()
console.log(myArray)
//[ 0, 1, 2, 3, 4, 5 ]
//remove from begining

console.log(myArray.includes(9))
//false
console.log(myArray.indexOf(1))
//1
console.log(myArray.indexOf(10))
//10 doesnot exist in therefore ans -1

const newArray2=myArray.join()
console.log(newArray2)
//converted to string

console.log("A",myArray);

//slice

const myn1=myArray.slice(1,3)
console.log(myArray)
console.log(myn1);

const myn2=myArray.splice(1,3)
console.log(myArray)
console.log(myn2);
