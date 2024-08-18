const name="Bhawneet"
const repoCount=50
// console.log( name + repoCount +" Values") not recommended

//backticks(string interpolation)
console.log(` Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String('Bhawneet')
// 0->B stored as this in memory
// 1->h
// 2->a
// 3->w
// 4->n
// 5->e
// 6->e
// 7->t indexs and there values
console.log(gameName[0])//B
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//return char at position 2
console.log(gameName.indexOf('t'));

const newStr=gameName.substring(0,4);//4 not included 0,1,2,3//if negetive value given then start from 0
console.log(newStr)

const anotherStr=gameName.slice(-6,4)
console.log(anotherStr)

const str="    Bhawneet     "
console.log(str)
console.log(str.trim())//trim
console.log(str.trimStart());
console.log(str.trimEnd());

const url="https://bhawneet.com/bhawneet%20"

console.log(url.replace('%20','-'))

console.log(url.includes('bhawneet'))


const n="helo-how-are-you"
console.log(n.split('-'))