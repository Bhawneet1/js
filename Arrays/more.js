const marvel_heros=["Spiderman","Thor","Ironman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])
//[ 'Spiderman', 'Thor', 'Ironman', [ 'superman', 'flash', 'batman' ] ]
//takes array as data 

let arr=marvel_heros.concat(dc_heros)
console.log(arr)
console.log(arr[4])
//returns new array with all element in order 


const all_new_heros=[...marvel_heros,...dc_heros]
//array toot gya hai elements mai therefore one array of all values
console.log(all_new_heros)


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
//remove all the internal arrays ,give infinite remove all the depth
//[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

console.log(Array.isArray("Bhawneet"))
//false

console.log(Array.from("Bhawneet"))
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.from({name:"Bhawneet"}))
//[] empty array no onject-> array

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))
//[100,200,300]